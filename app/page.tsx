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

// ── Tariff data ────────────────────────────────────────────────────────────────

const tariffs = [
  {
    name: "Magenta S",
    price: "9,95",
    description: "Ideal für den Alltag",
    data: "5 GB",
    features: [
      "Unbegrenzte Telefonie & SMS",
      "5 GB Datenvolumen",
      "EU-Roaming inklusive",
      "Magenta TV Basis",
    ],
    highlight: false,
  },
  {
    name: "Magenta M",
    price: "19,95",
    description: "Unser beliebtester Tarif",
    data: "20 GB",
    features: [
      "Unbegrenzte Telefonie & SMS",
      "20 GB Datenvolumen",
      "EU-Roaming inklusive",
      "Magenta TV Basis",
      "StreamOn Music & Video",
    ],
    highlight: true,
  },
  {
    name: "Magenta L",
    price: "29,95",
    description: "Für höchste Ansprüche",
    data: "Unbegrenzt",
    features: [
      "Unbegrenzte Telefonie & SMS",
      "Unbegrenzte Daten",
      "EU-Roaming inklusive",
      "Magenta TV Premium",
      "StreamOn Music & Video",
      "5G-Netz inklusive",
    ],
    highlight: false,
  },
];

const features = [
  {
    icon: "📶",
    title: "Deutschlands bestes Netz",
    description:
      "Millionen Kunden vertrauen auf unser preisgekröntes Mobilfunknetz mit 99,7 % Bevölkerungsabdeckung.",
  },
  {
    icon: "🛡️",
    title: "Sicher & zuverlässig",
    description:
      "Höchste Datensicherheit und Netzstabilität – damit Sie immer verbunden bleiben, wenn es zählt.",
  },
  {
    icon: "🌍",
    title: "EU-Roaming ohne Aufpreis",
    description:
      "Telefonieren, SMS schreiben und surfen Sie in der ganzen EU – ohne versteckte Zusatzkosten.",
  },
  {
    icon: "🎬",
    title: "Entertainment inklusive",
    description:
      "Streaming, Musik und TV direkt im Tarif – alles, was Sie begeistert, an einem Ort.",
  },
];

const faqs = [
  {
    q: "Wie lange ist die Mindestvertragslaufzeit?",
    a: "Unsere Tarife haben eine Mindestvertragslaufzeit von 24 Monaten. Danach können Sie monatlich kündigen.",
  },
  {
    q: "Kann ich meinen Tarif wechseln?",
    a: "Ja, ein Tarifwechsel ist jederzeit möglich. Upgrades werden sofort wirksam, Downgrades zum nächsten Monat.",
  },
  {
    q: "Ist EU-Roaming in allen Tarifen enthalten?",
    a: "Ja, EU-Roaming ist in allen Magenta-Tarifen ohne Aufpreis enthalten. Außerhalb der EU gelten gesonderte Konditionen.",
  },
  {
    q: "Wie kann ich kündigen?",
    a: "Eine Kündigung ist schriftlich per Brief, per E-Mail oder direkt in der MeinMagenta App möglich – mit einer Frist von vier Wochen.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-2xl tracking-tight">T</span>
            <span className="font-semibold text-lg">Telekom</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {["Tarife", "Netz", "Service", "Über uns"].map((label) => (
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
            <Button size="sm">Tarif wählen</Button>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-80">
              Deutschlands Nr. 1 Mobilfunknetz
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Bleib verbunden.<br />Mit Magenta.
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
              Erlebe unbegrenzte Möglichkeiten mit unseren flexiblen Tarifen –
              zuverlässig, schnell und immer für dich da.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
              >
                Tarife entdecken
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tariff Cards ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Der passende Tarif für jeden
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Transparent, fair und ohne versteckte Kosten – wähle deinen Tarif
              und starte sofort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {tariffs.map((tariff) => (
              <Card
                key={tariff.name}
                className={tariff.highlight ? "ring-2 ring-primary relative" : ""}
              >
                {tariff.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardDescription>{tariff.description}</CardDescription>
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <div className="pt-2">
                    <span className="text-4xl font-bold">{tariff.price} €</span>
                    <span className="text-muted-foreground text-sm"> / Monat</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tariff.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tariff.highlight ? "default" : "outline"}
                  >
                    {tariff.name} wählen
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Warum Telekom?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Millionen Menschen vertrauen täglich auf unser Netz. Hier ist warum.
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

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Häufige Fragen
            </h2>
            <p className="text-muted-foreground text-lg">
              Alles, was du über unsere Tarife wissen möchtest.
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

      {/* ── CTA Banner ──────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit, zu wechseln?
          </h2>
          <p className="opacity-90 text-lg mb-8">
            Starte noch heute und erlebe Deutschlands bestes Mobilfunknetz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              Jetzt Tarif wählen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary font-bold text-xl">T</span>
                <span className="font-semibold">Telekom</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Verbindung ist unsere Leidenschaft. Jeden Tag für Millionen Menschen.
              </p>
            </div>
            {[
              {
                heading: "Produkte",
                links: ["Mobilfunk", "Festnetz", "Internet", "TV & Streaming"],
              },
              {
                heading: "Service",
                links: ["Hilfe & Kontakt", "MeinMagenta App", "Shops", "Netzausbau"],
              },
              {
                heading: "Unternehmen",
                links: ["Über uns", "Karriere", "Presse", "Investor Relations"],
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
            <p>© {new Date().getFullYear()} Deutsche Telekom AG. Alle Rechte vorbehalten.</p>
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
