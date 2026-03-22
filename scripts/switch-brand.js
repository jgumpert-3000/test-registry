/**
 * switch-brand.js
 *
 * Switches the Semantic variable collection to a target brand by re-aliasing
 * every Semantic variable that has a matching override in the Brand-Telekom or
 * Brand-BMW collection.  All Figma components bound to the Semantic collection
 * update automatically — no frame-level mode juggling needed.
 *
 * Usage — paste into Figma Console (or run via figma_execute):
 *
 *   await switchBrand('Telekom');
 *   await switchBrand('BMW');
 */

async function switchBrand(targetBrand) {
  if (!['Telekom', 'BMW'].includes(targetBrand)) {
    return { error: `Unknown brand "${targetBrand}". Use "Telekom" or "BMW".` };
  }

  const allCollections = await figma.variables.getLocalVariableCollectionsAsync();
  const semanticCol = allCollections.find(c => c.name === 'Semantic');
  const brandCol    = allCollections.find(c => c.name === `Brand-${targetBrand}`);

  if (!semanticCol) return { error: 'Semantic collection not found' };
  if (!brandCol)    return { error: `Brand-${targetBrand} collection not found` };

  const allVars  = await figma.variables.getLocalVariablesAsync();
  const semVars  = allVars.filter(v => v.variableCollectionId === semanticCol.id);
  const brandVars = allVars.filter(v => v.variableCollectionId === brandCol.id);

  const semMode   = semanticCol.modes[0].modeId;
  const brandMode = brandCol.modes[0].modeId;

  const updated = [];
  const skipped = [];

  for (const brandVar of brandVars) {
    // Find the matching Semantic variable by name
    const semVar = semVars.find(v => v.name === brandVar.name);
    if (!semVar) {
      skipped.push({ name: brandVar.name, reason: 'no matching Semantic variable' });
      continue;
    }

    const brandValue = brandVar.valuesByMode[brandMode];
    if (!brandValue) {
      skipped.push({ name: brandVar.name, reason: 'brand variable has no value' });
      continue;
    }

    if (brandValue.type === 'VARIABLE_ALIAS') {
      // Re-point the Semantic variable at the same Primitive the brand uses
      const primitiveVar = allVars.find(v => v.id === brandValue.id);
      if (!primitiveVar) {
        skipped.push({ name: brandVar.name, reason: 'primitive target not found' });
        continue;
      }
      semVar.setValueForMode(semMode, figma.variables.createVariableAlias(primitiveVar));
      updated.push({ semantic: semVar.name, nowAliases: primitiveVar.name });
    } else {
      // Direct value (e.g. FLOAT for radius)
      semVar.setValueForMode(semMode, brandValue);
      updated.push({ semantic: semVar.name, value: brandValue });
    }
  }

  return {
    brand:   targetBrand,
    updated: updated.length,
    skipped: skipped.length,
    changes: updated,
  };
}

// ─── Run ──────────────────────────────────────────────────────────────────────
// Change the argument to 'Telekom' or 'BMW' and run.
return await switchBrand('BMW');
