import { type SliderState, type DrinkResult } from '../types/drink'

/**
 * Benannter Anchor-Drink mit exakter SliderState-Kombination.
 * Wenn die Engine einen exakten Match findet, wird dieser Drink verwendet.
 */
interface AnchorDrink extends DrinkResult {
  /** Die exakte SliderState-Kombination die diesen Drink triggert */
  key: SliderState
}

/**
 * Saisonaler Verfügbarkeitshinweis — rechtlich erforderlich auf allen Drinks.
 * Stellt klar dass das Barteam die finale Komposition anpasst.
 */
const SEASONAL_NOTE =
  'Die finale Komposition hängt von Saison und Verfügbarkeit ab. Das Barteam des Ritz Paris verfeinert den Drink vor Ort.'

// ─── Sans alcool (Modus 0) ─────────────────────────────────────────────────

/**
 * Anchor-Drinks für den alkoholfreien Rezeptbaum.
 * Basis: Tee, Verjus, Frucht, Kräuter, Sparkling Tea.
 * Kein Alkohol-Disclaimer auf diesen Drinks.
 */
const SANS_ALCOOL: AnchorDrink[] = [
  {
    key: [0, 0, 0, 0],
    name: 'Jardin Silencieux',
    story: 'Für einen Abend, der leise beginnt. Kühl, klar und von unaufdringlicher Frische.',
    base: 'Gurken-Verjus',
    accents: ['Minze', 'Yuzu', 'Stilles Wasser'],
    glass: 'Nick & Nora',
    garnish: 'Minzzweig',
    profile: ['frisch', 'leise', 'klar'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [0, 0, 1, 0],
    name: 'Blanc de Rosée',
    story: 'Weich und blumig, wie der erste Moment eines ruhigen Morgens.',
    base: 'Holunderblüten-Cordial',
    accents: ['Rosenessenz', 'Verjus', 'Mineralwasser'],
    glass: 'Nick & Nora',
    garnish: 'Rosenblüte',
    profile: ['blumig', 'weich', 'leicht'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [0, 0, 2, 0],
    name: 'Thé Noir Vendôme',
    story: 'Ein stilles, tiefes Getränk — Earl Grey und Gewürz für einen introvertierten Abend.',
    base: 'Earl-Grey-Kaltaufguss',
    accents: ['Bergamotte', 'Kardamom', 'Honig'],
    glass: 'Nick & Nora',
    garnish: 'Orangenzeste',
    profile: ['tief', 'würzig', 'warm'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 1, 0, 0],
    name: 'Citron Précis',
    story: 'Präzise ausbalanciert, frisch und klar — für einen eleganten Auftakt ohne Alkohol.',
    base: 'Zitronenmelissen-Tee',
    accents: ['Grapefruit', 'Agavensirup', 'Soda'],
    glass: 'Coupette',
    garnish: 'Grapefruitscheibe',
    profile: ['zitrisch', 'präzise', 'frisch'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 1, 1, 0],
    name: 'Pétale Doré',
    story: 'Elegant und blumig — Jasmin und Pfirsich in einer klaren Komposition.',
    base: 'Jasmin-Tee',
    accents: ['Pfirsich-Nektar', 'Zitronensaft', 'Soda'],
    glass: 'Coupette',
    garnish: 'Pfirsichscheibe',
    profile: ['blumig', 'elegant', 'hell'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 2, 2, 0],
    name: 'Encre de Nuit',
    story: 'Charaktervoll und geheimnisvoll — Tee und Kakao für einen unerwarteten Abend.',
    base: 'Schwarzer Tee',
    accents: ['Kakao-Wasser', 'Orangenschale', 'Ingwer'],
    glass: 'Coupette',
    garnish: 'Kakaopulver-Rim',
    profile: ['dunkel', 'tief', 'überraschend'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 2, 0, 0],
    name: 'Cascade Fraîche',
    story: 'Funkelnd und frisch — Sparkling Tea mit Zitrus für einen glänzenden Auftakt.',
    base: 'Sparkling Tea',
    accents: ['Zitronenthymian', 'Grapefruit', 'Agave'],
    glass: 'Flute',
    garnish: 'Thymianzweig',
    profile: ['funkelnd', 'frisch', 'hell'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 1, 1, 0],
    name: 'Floraison Perlée',
    story: 'Perlig, elegant und blumig — für einen Abend der gesehen werden darf.',
    base: 'Sparkling Tea mit Rose',
    accents: ['Lychee', 'Holunder', 'Zitrus'],
    glass: 'Flute',
    garnish: 'Rosenblatt',
    profile: ['perlig', 'blumig', 'glänzend'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 2, 2, 0],
    name: 'Nuit Perlée',
    story: 'Ein funkelnder Abschluss ohne Alkohol — warm, tief und mit bleibender Aromatik.',
    base: 'Sparkling Tea',
    accents: ['Orangenblüte', 'Gewürznelke', 'Kandiszucker'],
    glass: 'Highball',
    garnish: 'Sternanis',
    profile: ['funkelnd', 'warm', 'geheimnisvoll'],
    abvLevel: 'none',
    seasonalNote: SEASONAL_NOTE,
  },
]

// ─── Low-ABV (Modus 1) ────────────────────────────────────────────────────

/**
 * Anchor-Drinks für den Low-ABV-Rezeptbaum.
 * Basis: Vermouth, Apéritif, Cider, Champagne.
 */
const LOW_ABV: AnchorDrink[] = [
  {
    key: [0, 0, 0, 1],
    name: 'Murmure Blanc',
    story: 'Leise und präzise — ein kurzer Vermouth-Drink für den stillen Beginn.',
    base: 'Weißer Vermouth',
    accents: ['Gurke', 'Yuzu', 'Stilles Wasser'],
    glass: 'Nick & Nora',
    garnish: 'Gurkenscheibe',
    profile: ['frisch', 'leise', 'mineralisch'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [0, 1, 1, 1],
    name: 'Jardin de Fleurs',
    story: 'Präzise und blumig — Lillet und Holunder in eleganter Balance.',
    base: 'Lillet Blanc',
    accents: ['Holunderblüte', 'Bergamotte', 'Tonic'],
    glass: 'Nick & Nora',
    garnish: 'Holunderblüte',
    profile: ['blumig', 'präzise', 'hell'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 1, 0, 1],
    name: 'Clarté d\'Été',
    story: 'Ein eleganter Sommerdrink — Champagne und Zitrus für den offenen Abend.',
    base: 'Champagne',
    accents: ['Zitrone', 'Holunder', 'Minze'],
    glass: 'Flute',
    garnish: 'Zitronenzeste',
    profile: ['frisch', 'perlig', 'elegant'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 2, 1, 1],
    name: 'Apéritif Caractère',
    story: 'Bitter und blumig — Aperol und Rose für einen charaktervollen Auftakt.',
    base: 'Aperol',
    accents: ['Rosensirup', 'Zitrus', 'Prosecco'],
    glass: 'Coupette',
    garnish: 'Rosenblatt',
    profile: ['bitter', 'blumig', 'lebendig'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 2, 2, 1],
    name: 'Ombre d\'Automne',
    story: 'Warm und tief — Vermouth rosso mit Gewürz für einen charaktervollen Abend.',
    base: 'Vermouth Rosso',
    accents: ['Orange', 'Zimt', 'Angostura'],
    glass: 'Rocks Glass',
    garnish: 'Orangenzeste',
    profile: ['warm', 'würzig', 'tief'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 1, 0, 1],
    name: 'Champagne Fraîcheur',
    story: 'Funkelnd und frisch — Champagne pur mit einem Hauch Zitrus.',
    base: 'Champagne',
    accents: ['Grapefruit-Bitters', 'Zitronenöl'],
    glass: 'Flute',
    garnish: 'Zitronenzeste',
    profile: ['funkelnd', 'frisch', 'elegant'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 2, 2, 1],
    name: 'Vendôme Royale',
    story: 'Glanzvoll und tief — Champagne mit Gewürz für einen Abend der in Erinnerung bleibt.',
    base: 'Champagne',
    accents: ['Kardamom-Sirup', 'Orangenbitter', 'Ingwer'],
    glass: 'Flute',
    garnish: 'Kandierte Orangenschale',
    profile: ['funkelnd', 'würzig', 'bleibend'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 0, 1, 1],
    name: 'Rosée du Matin',
    story: 'Sanft und perlig — Crémant und Rose für einen glänzenden, leichten Auftakt.',
    base: 'Crémant',
    accents: ['Rosensirup', 'Lychee', 'Himbeere'],
    glass: 'Flute',
    garnish: 'Himbeer',
    profile: ['perlig', 'blumig', 'sanft'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [0, 2, 2, 1],
    name: 'Amer Discret',
    story: 'Für den stillen Charakterkopf — Sherry und Gewürz in einem kurzen, tiefen Glas.',
    base: 'Fino Sherry',
    accents: ['Orange', 'Wermut-Bitters', 'Salz'],
    glass: 'Nick & Nora',
    garnish: 'Orangenzeste',
    profile: ['trocken', 'salzig', 'tief'],
    abvLevel: 'low',
    seasonalNote: SEASONAL_NOTE,
  },
]

// ─── Signature 18+ (Modus 2) ─────────────────────────────────────────────

/**
 * Anchor-Drinks für den Signature-Rezeptbaum (18+).
 * Basis: Gin, Cognac, Calvados, Rum, Vodka.
 * Diese Drinks tragen immer einen Responsible-Drinking-Hinweis.
 */
const SIGNATURE: AnchorDrink[] = [
  {
    key: [0, 0, 0, 2],
    name: 'Le Silence de Vendôme',
    story: 'Für den stillen Abend — ein kurzer Gin-Drink mit klarer Frische und wenig Lärm.',
    base: 'London Dry Gin',
    accents: ['Gurke', 'Limette', 'Dry Vermouth'],
    glass: 'Nick & Nora',
    garnish: 'Gurkenscheibe',
    profile: ['frisch', 'klar', 'diskret'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [0, 2, 2, 2],
    name: 'Cognac Solitaire',
    story: 'Dunkel und ruhig — Cognac mit Orangenbitter für den introvertierten Kenner.',
    base: 'Cognac VSOP',
    accents: ['Grand Marnier', 'Angostura', 'Orangenzeste'],
    glass: 'Nick & Nora',
    garnish: 'Orangenzeste',
    profile: ['tief', 'warm', 'charaktervoll'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 1, 0, 2],
    name: 'Gimlet de Paris',
    story: 'Präzise und frisch — ein eleganter Gin-Gimlet mit Pariser Anmut.',
    base: 'Gin',
    accents: ['Limettensaft', 'Zuckersirup', 'Gurkenwasser'],
    glass: 'Coupette',
    garnish: 'Limettenzeste',
    profile: ['zitrisch', 'präzise', 'clean'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 1, 1, 2],
    name: 'Place Fleurie',
    story: 'Elegant und blumig — Gin mit Rose und Litschi für einen offenen Abend.',
    base: 'Floraler Gin',
    accents: ['Rosenlikör', 'Litschi', 'Zitrus'],
    glass: 'Coupette',
    garnish: 'Rosenblüte',
    profile: ['blumig', 'elegant', 'weich'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [1, 2, 2, 2],
    name: 'Midnight Vendôme',
    story: 'Ein Drink für einen Abend, der nicht laut sein muss, um gesehen zu werden. Warm, präzise und mit einer dunklen Zitrusspur, die bleibt.',
    base: 'Cognac',
    accents: ['Orange', 'Verjus', 'Kakao-Bitter', 'Ginger-Finish'],
    glass: 'Rocks Glass',
    garnish: 'Orangenzeste',
    profile: ['tief', 'warm', 'zitrisch', 'elegant'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 1, 0, 2],
    name: 'Ritz Highball',
    story: 'Funkelnd, frisch und präzise — der klassische Highball im Ritz-Stil.',
    base: 'Vodka',
    accents: ['Grapefruit', 'Tonic', 'Minze'],
    glass: 'Highball',
    garnish: 'Minzzweig',
    profile: ['funkelnd', 'frisch', 'klar'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 2, 2, 2],
    name: 'Hemingway Sombre',
    story: 'Für Abende, die in Geschichte geschrieben werden. Rum, Kakao und Orange — ein langer, tiefer Drink aus der Bar Hemingway.',
    base: 'Dunkler Rum',
    accents: ['Kakao-Likör', 'Orange', 'Angostura', 'Soda'],
    glass: 'Highball',
    garnish: 'Kandierte Orangenschale',
    profile: ['tief', 'dunkel', 'funkelnd', 'bleibend'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [2, 0, 1, 2],
    name: 'Calvados en Fleur',
    story: 'Sanft und funkelnd — Calvados mit Champagne und Rose für einen glänzenden Auftakt.',
    base: 'Calvados',
    accents: ['Rosensirup', 'Champagne', 'Zitrus'],
    glass: 'Flute',
    garnish: 'Rosenblüte',
    profile: ['fruchtig', 'blumig', 'perlig'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
  {
    key: [0, 1, 1, 2],
    name: 'Martini Discret',
    story: 'Still und präzise — ein trockener Martini mit blumiger Note für den ruhigen Kenner.',
    base: 'Gin',
    accents: ['Dry Vermouth', 'Orangenblüte', 'Zitronenöl'],
    glass: 'Nick & Nora',
    garnish: 'Zitronenzeste',
    profile: ['trocken', 'blumig', 'präzise'],
    abvLevel: 'full',
    seasonalNote: SEASONAL_NOTE,
  },
]

/** Alle Anchor-Drinks kombiniert. */
export const ANCHOR_DRINKS: AnchorDrink[] = [
  ...SANS_ALCOOL,
  ...LOW_ABV,
  ...SIGNATURE,
]

/**
 * Sucht einen exakten Anchor-Drink für den gegebenen SliderState.
 *
 * @param state - Die vier Regler-Positionen
 * @returns Den passenden AnchorDrink oder undefined wenn kein exakter Match
 * @example
 * const drink = findAnchorDrink([2, 2, 2, 2]) // → Hemingway Sombre
 */
export const findAnchorDrink = (state: SliderState): AnchorDrink | undefined =>
  ANCHOR_DRINKS.find(d =>
    d.key[0] === state[0] &&
    d.key[1] === state[1] &&
    d.key[2] === state[2] &&
    d.key[3] === state[3]
  )
