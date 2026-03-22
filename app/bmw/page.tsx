"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ── Model data ─────────────────────────────────────────────────────────────────

const models = [
  {
    name: "BMW 3er",
    subtitle: "Limousine",
    price: "44.900",
    description: "Der klassische Sportler",
    specs: [
      "Leistung ab 156 PS",
      "0–100 km/h in 7,1 s",
      "Verbrauch ab 5,4 l/100 km",
      "Live Cockpit Professional",
      "Driving Assistant",
    ],
    highlight: false,
  },
  {
    name: "BMW 5er",
    subtitle: "Limousine",
    price: "58.500",
    description: "Business-Klasse neu definiert",
    specs: [
      "Leistung ab 184 PS",
      "0–100 km/h in 6,5 s",
      "Verbrauch ab 5,0 l/100 km",
      "BMW Curved Display",
      "Parking Assistant Plus",
      "Wireless Charging",
    ],
    highlight: true,
  },
  {
    name: "BMW X5",
    subtitle: "Sports Activity Vehicle",
    price: "79.900",
    description: "Überlegene Dynamik",
    specs: [
      "Leistung ab 245 PS",
      "0–100 km/h in 6,0 s",
      "Allradantrieb xDrive",
      "Panorama-Glasdach",
      "Driving Assistant Professional",
      "Harman Kardon Surround Sound",
    ],
    highlight: false,
  },
];

const features = [
  {
    icon: "⚡",
    title: "Elektrifizierte Antriebe",
    description:
      "Von Mild-Hybrid bis Plug-in: Unsere elektrifizierten Antriebe verbinden maximale Effizienz mit purer Fahrfreude.",
  },
  {
    icon: "🧠",
    title: "BMW Intelligent Personal Assistant",
    description:
      "Der smarte Assistent versteht natürliche Sprache und lernt Ihre Präferenzen – für ein intuitives Fahrerlebnis.",
  },
  {
    icon: "🛡️",
    title: "Fahrassistenzsysteme",
    description:
      "Modernste Sicherheitstechnologie überwacht Ihr Umfeld und unterstützt Sie aktiv in jeder Fahrsituation.",
  },
  {
    icon: "🌐",
    title: "BMW ConnectedDrive",
    description:
      "Nahtlose Vernetzung mit Ihrem digitalen Leben – Remote Services, Live Traffic und Over-the-Air Updates.",
  },
];

const faqs = [
  {
    q: "Welche Finanzierungsoptionen gibt es?",
    a: "Wir bieten Barkauf, BMW Bank Kredit, Leasing und die BMW Flex-Finanzierung an. Unser Berater findet die passende Lösung für Sie.",
  },
  {
    q: "Wie lange ist die Garantie?",
    a: "BMW gewährt 2 Jahre Herstellergarantie ohne Kilometerbegrenzung. Optional ist eine Anschlussgarantie bis zu 5 Jahren erhältlich.",
  },
  {
    q: "Kann ich mein Fahrzeug individuell konfigurieren?",
    a: "Ja, über den BMW Online Konfigurator gestalten Sie Ihr Wunschfahrzeug – von der Motorisierung bis zur Innenausstattung.",
  },
  {
    q: "Gibt es eine Probefahrt?",
    a: "Selbstverständlich. Vereinbaren Sie eine kostenlose Probefahrt in Ihrem BMW Autohaus – online oder telefonisch.",
  },
];

// ── Page ────────────────────────────────────────────────────────────────────────

export default function BMWPage() {
  return (
    <div className="brand-bmw min-h-screen bg-background text-foreground font-sans">

      {/* ── Nav ──────────────────────────────────────────────────────────────── */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">BMW</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">BMW</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {["Modelle", "Elektro", "Services", "Händler"].map((label) => (
              <a
                key={label}
                href="#"
                className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Anmelden</Button>
            <Button size="sm">Konfigurieren</Button>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-80">
              Sheer Driving Pleasure
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Freude am Fahren.<br />Neu definiert.
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              Entdecke die neue Generation BMW – wo modernste Technologie auf
              pures Fahrerlebnis trifft. Jedes Detail durchdacht. Jede Kurve
              gemeistert.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
              >
                Modelle entdecken
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Probefahrt buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Model Cards ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Modelle
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Finden Sie das BMW Modell, das zu Ihrem Leben passt – vom
              sportlichen Sedan bis zum vielseitigen SAV.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {models.map((model) => (
              <Card
                key={model.name}
                className={model.highlight ? "ring-2 ring-primary relative" : ""}
              >
                {model.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-sm">
                      Meistverkauft
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardDescription>{model.subtitle}</CardDescription>
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                  <div className="pt-2">
                    <span className="text-4xl font-bold">{model.price} €</span>
                    <span className="text-muted-foreground text-sm"> ab</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    className="flex-1"
                    variant={model.highlight ? "default" : "outline"}
                  >
                    Konfigurieren
                  </Button>
                  <Button variant="ghost" className="flex-1">
                    Mehr erfahren
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologie, die begeistert
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Jede BMW Innovation entsteht aus einer einzigen Frage: Wie machen
              wir das Fahren noch besser?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col gap-3">
                <div className="text-4xl">{f.icon}</div>
                <h3 className="font-semibold text-base">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Häufige Fragen
            </h2>
            <p className="text-muted-foreground text-lg">
              Alles, was Sie über BMW Fahrzeuge und Services wissen möchten.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihr BMW Erlebnis?
          </h2>
          <p className="opacity-90 text-lg mb-8">
            Konfigurieren Sie Ihr Traumfahrzeug oder vereinbaren Sie eine
            unverbindliche Probefahrt bei Ihrem BMW Partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Jetzt konfigurieren
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Händler finden
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">BMW</span>
                </div>
                <span className="font-semibold">BMW</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Freude am Fahren. Seit 1916 stehen wir für Leidenschaft,
                Innovation und Qualität.
              </p>
            </div>
            {[
              {
                heading: "Modelle",
                links: ["BMW 1er", "BMW 3er", "BMW 5er", "BMW X5", "BMW iX"],
              },
              {
                heading: "Services",
                links: ["BMW Financial Services", "BMW ConnectedDrive", "Werkstatt", "Ersatzteile"],
              },
              {
                heading: "Unternehmen",
                links: ["Über BMW", "Karriere", "Presse", "Investor Relations"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="font-semibold text-sm mb-3">{col.heading}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} BMW AG. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              {["Impressum", "Datenschutz", "AGB", "Cookie-Einstellungen"].map((l) => (
                <a key={l} href="#" className="hover:text-foreground transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
