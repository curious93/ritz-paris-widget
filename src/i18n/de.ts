import { type Translations } from './types'

/** Deutsche Übersetzungen — Standardsprache. */
export const de: Translations = {
  intro: {
    eyebrow:  'Bar Hemingway · Place Vendôme',
    headline: 'Komponieren Sie Ihren Ritz‑Abend.',
    subline:  'Ein Abend an der Place Vendôme beginnt mit einem Gefühl: ein wenig Licht, ein wenig Musik, ein Hauch Geschichte in der Luft. Wählen Sie den Ton Ihres Abends und erhalten Sie ein persönliches Cocktail‑Rezept, inspiriert vom Geist des Ritz Paris.',
  },
  sliders: [
    {
      question: '🥃  Ihr Modus',
      positions: [
        { label: 'Sans alcool',       subline: 'Ein vollständiger Genuss ohne Alkohol — Tee, Verjus, Frucht und Kräuter in präzisen Kompositionen.' },
        { label: 'Leicht',            subline: 'Wenig Alkohol, viel Charakter — Vermouth, Champagne oder Apéritif für einen leichten, eleganten Abend.' },
        { label: 'Signature 18+',     subline: 'Die klassische Bar-Erfahrung — Gin, Cognac, Calvados, Rum oder Vodka als Fundament.' },
      ],
    },
    {
      question: '🌙  Wie beginnt Ihr Abend?',
      positions: [
        { label: 'Still & privat',       subline: 'Ein kurzer, ruhiger Drink für einen Abend, der leise beginnt — wenig Kohlensäure, diskrete Präsenz.' },
        { label: 'Elegant & offen',      subline: 'Ausbalanciert und einladend — für einen geselligen Auftakt mit leichter Frische und klarer Form.' },
        { label: 'Glanzvoll & sichtbar', subline: 'Ein langer, funkelnder Drink für Momente mit Präsenz — Champagne, Soda oder Sparkling Tea.' },
      ],
    },
    {
      question: '🎩  Welche Haltung passt zu Ihnen?',
      positions: [
        { label: 'Sanft',         subline: 'Weich, rund und einladend — geringe Intensität, wenig Säure, ein Drink der sich nicht aufdrängt.' },
        { label: 'Präzise',       subline: 'Klar strukturiert, trocken und zitrisch — jedes Element hat seinen definierten Platz.' },
        { label: 'Charaktervoll', subline: 'Komplex und bestimmt — Bitters, Gewürz und eine starke Basisnote für einen Drink mit Haltung.' },
      ],
    },
    {
      question: '🌿  Welche Aromatik spricht Sie an?',
      positions: [
        { label: 'Frisch',        subline: 'Hell und lebendig — Zitrus, Apfel, Minze und Gurke für eine klare, belebende Aromatik.' },
        { label: 'Blumig',        subline: 'Zart und elegant — Jasmin, Rose, Holunder und Pfirsich mit einer feinen floralen Garnitur.' },
        { label: 'Geheimnisvoll', subline: 'Dunkel und warm — Orange, Kakao, Tee und Gewürze für eine tiefe, bleibende Aromatik.' },
      ],
    },
  ],
  card: {
    eyebrow:    'Ihre persönliche Komposition',
    basis:      'Basis',
    aromatik:   'Aromatik',
    glas:       'Glas',
    garnitur:   'Garnitur',
    pdfButton:  'Rezeptkarte',
    pdfLoading: 'Wird erstellt…',
    disclaimer:   'Dieser Drink enthält Alkohol. Genuss in Maßen — Bitte trinken Sie verantwortungsvoll. Nicht geeignet für Personen unter 18 Jahren.',
    seasonalNote: 'Die finale Komposition hängt von Saison und Verfügbarkeit ab. Das Barteam des Ritz Paris verfeinert den Drink vor Ort.',
  },
  pdf: {
    byline: 'Bar Hemingway · Place Vendôme · Paris',
    footer: 'Ritz Paris — Votre composition personnelle',
  },
  langLabel: 'DE',
}
