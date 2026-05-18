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
        { label: 'Sans alcool',       subline: 'Tee, Verjus, Frucht, Kräuter, Sparkling Tea' },
        { label: 'Leicht',            subline: 'Low-ABV — Vermouth, Apéritif, Champagne' },
        { label: 'Signature 18+',     subline: 'Gin, Cognac, Calvados, Rum oder Vodka' },
      ],
    },
    {
      question: '🌙  Wie beginnt Ihr Abend?',
      positions: [
        { label: 'Still & privat',       subline: 'Kurzer, ruhiger Drink — wenig Kohlensäure, diskrete Präsenz' },
        { label: 'Elegant & offen',      subline: 'Ausbalanciert, leichte Frische — für einen geselligen Auftakt' },
        { label: 'Glanzvoll & sichtbar', subline: 'Längerer, funkelnder Drink — Champagne oder Soda, volle Präsenz' },
      ],
    },
    {
      question: '🎩  Welche Haltung passt zu Ihnen?',
      positions: [
        { label: 'Sanft',         subline: 'Weiche Säure, runde Süße, niedrigere Intensität' },
        { label: 'Präzise',       subline: 'Klarer Aufbau, trockener, zitrisch, definierte Balance' },
        { label: 'Charaktervoll', subline: 'Mehr Tiefe, Bitters, Gewürz, stärkere Basisnote' },
      ],
    },
    {
      question: '🌿  Welche Aromatik spricht Sie an?',
      positions: [
        { label: 'Frisch',        subline: 'Zitrus, Apfel, Minze, Gurke — helle, klare Aromatik' },
        { label: 'Blumig',        subline: 'Jasmin, Rose, Holunder, Pfirsich — elegante Garnitur' },
        { label: 'Geheimnisvoll', subline: 'Orange, Kakao, Tee, Gewürz — dunkle, warme Aromatik' },
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
    disclaimer: 'Dieser Drink enthält Alkohol. Genuss in Maßen — Bitte trinken Sie verantwortungsvoll. Nicht geeignet für Personen unter 18 Jahren.',
  },
  pdf: {
    byline: 'Bar Hemingway · Place Vendôme · Paris',
    footer: 'Ritz Paris — Votre composition personnelle',
  },
  langLabel: 'DE',
}
