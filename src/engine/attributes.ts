import { type SliderState } from '../types/drink'

/**
 * Attribut-Set das Regler 1 (Abend-Modus) steuert.
 * Bestimmt Glastyp, Getränkelänge, Kohlensäure und visuelle Präsenz.
 */
export interface AbendAttributes {
  /** Empfohlener Glastyp, z.B. "Nick & Nora" */
  glass: string
  /** Ob der Drink Kohlensäure / Sparkle enthält */
  sparkling: boolean
  /** Länge: 'short' | 'medium' | 'long' */
  length: 'short' | 'medium' | 'long'
}

/**
 * Attribut-Set das Regler 2 (Haltung) steuert.
 * Bestimmt Intensität, Süße-Säure-Balance und Bitterkeit.
 */
export interface HaltungAttributes {
  /** Intensitätsstufe 1–3 */
  strength: 1 | 2 | 3
  /** Ob Bitterkeit eine Rolle spielt */
  bitter: boolean
  /** Süße-Profil */
  sweetness: 'round' | 'dry' | 'deep'
}

/**
 * Attribut-Set das Regler 3 (Spur) steuert.
 * Bestimmt Aromaprofil, Farbrichtung und Garnitur-Stil.
 */
export interface SpurAttributes {
  /** Aroma-Richtung für Drink-Profil */
  aromaFamily: 'citrus-fresh' | 'floral' | 'dark-spice'
  /** Garnitur-Stil */
  garnishStyle: 'herb-citrus' | 'flower-fruit' | 'peel-spice'
}

/**
 * Attribut-Set das Regler 4 (Modus) steuert.
 * Bestimmt Alkoholgrad, Rezeptbaum und Compliance-Anforderungen.
 */
export interface ModusAttributes {
  /** Alkohol-Level — steuert Disclaimer-Anzeige */
  abvLevel: 'none' | 'low' | 'full'
  /** Basis-Kategorie für Rezeptbaum-Auswahl */
  baseCategory: 'non-alcoholic' | 'low-abv' | 'spirit'
}

/** Vollständiges Attribut-Set aus allen vier Reglern kombiniert. */
export interface CombinedAttributes {
  abend: AbendAttributes
  haltung: HaltungAttributes
  spur: SpurAttributes
  modus: ModusAttributes
}

/** Mapping Regler 1 (Abend) → AbendAttributes */
const ABEND: [AbendAttributes, AbendAttributes, AbendAttributes] = [
  { glass: 'Nick & Nora',  sparkling: false, length: 'short' },  // 0 Still
  { glass: 'Coupette',     sparkling: false, length: 'medium' }, // 1 Elegant
  { glass: 'Highball',     sparkling: true,  length: 'long' },   // 2 Glanzvoll
]

/** Mapping Regler 2 (Haltung) → HaltungAttributes */
const HALTUNG: [HaltungAttributes, HaltungAttributes, HaltungAttributes] = [
  { strength: 1, bitter: false, sweetness: 'round' }, // 0 Sanft
  { strength: 2, bitter: false, sweetness: 'dry' },   // 1 Präzise
  { strength: 3, bitter: true,  sweetness: 'deep' },  // 2 Charaktervoll
]

/** Mapping Regler 3 (Spur) → SpurAttributes */
const SPUR: [SpurAttributes, SpurAttributes, SpurAttributes] = [
  { aromaFamily: 'citrus-fresh', garnishStyle: 'herb-citrus' },  // 0 Frisch
  { aromaFamily: 'floral',       garnishStyle: 'flower-fruit' }, // 1 Blumig
  { aromaFamily: 'dark-spice',   garnishStyle: 'peel-spice' },   // 2 Geheimnisvoll
]

/** Mapping Regler 4 (Modus) → ModusAttributes */
const MODUS: [ModusAttributes, ModusAttributes, ModusAttributes] = [
  { abvLevel: 'none', baseCategory: 'non-alcoholic' }, // 0 Sans alcool
  { abvLevel: 'low',  baseCategory: 'low-abv' },       // 1 Leicht
  { abvLevel: 'full', baseCategory: 'spirit' },        // 2 Signature
]

/**
 * Leitet aus einem SliderState das vollständige CombinedAttributes-Objekt ab.
 *
 * @param state - Die vier Regler-Positionen [0-2, 0-2, 0-2, 0-2]
 * @returns CombinedAttributes mit allen vier Attribut-Sets
 * @example
 * const attrs = getAttributes([2, 2, 2, 2])
 * // → { abend: Highball/long/sparkling, haltung: strong/bitter, ... }
 */
export const getAttributes = (state: SliderState): CombinedAttributes => ({
  abend:   ABEND[state[0]],
  haltung: HALTUNG[state[1]],
  spur:    SPUR[state[2]],
  modus:   MODUS[state[3]],
})
