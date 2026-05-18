import { type SliderState, type DrinkResult } from '../types/drink'
import { getAttributes } from './attributes'
import { findAnchorDrink } from '../data/drinks'

/** Saisonaler Hinweis für generierte Drinks (identisch mit Anchor-Drinks). */
const SEASONAL_NOTE =
  'Die finale Komposition hängt von Saison und Verfügbarkeit ab. Das Barteam des Ritz Paris verfeinert den Drink vor Ort.'

// ─── Generierungs-Tabellen für Fallback-Drinks ────────────────────────────

/** Basis-Zutaten pro Modus und Haltung wenn kein Anchor-Match vorliegt. */
const FALLBACK_BASE: Record<string, string> = {
  'none-round':  'Holunderblüten-Verjus',
  'none-dry':    'Zitronenmelissen-Tee',
  'none-deep':   'Earl-Grey-Kaltaufguss',
  'low-abv-round': 'Lillet Blanc',
  'low-abv-dry':   'Fino Sherry',
  'low-abv-deep':  'Vermouth Rosso',
  'spirit-round':  'Floraler Gin',
  'spirit-dry':    'London Dry Gin',
  'spirit-deep':   'Cognac VSOP',
}

/** Akzent-Aromen pro Aroma-Familie. */
const FALLBACK_ACCENTS: Record<string, string[]> = {
  'citrus-fresh': ['Zitrone', 'Limette', 'Minze'],
  'floral':       ['Holunder', 'Rose', 'Pfirsich'],
  'dark-spice':   ['Orange', 'Kakao-Bitter', 'Ingwer'],
}

/** Garnitur pro Garnitur-Stil. */
const FALLBACK_GARNISH: Record<string, string> = {
  'herb-citrus':  'Zitronenzeste',
  'flower-fruit': 'Rosenblüte',
  'peel-spice':   'Orangenzeste',
}

/**
 * Glas-Fallback: bei sparkling → Highball, sonst je nach Länge.
 *
 * @param glass - Standard-Glastyp aus Abend-Attributen
 * @param sparkling - Ob der Drink Kohlensäure enthält
 * @returns Finaler Glastyp
 */
const resolveGlass = (glass: string, sparkling: boolean): string => {
  if (sparkling) return 'Highball'
  return glass
}

/**
 * Profil-Tags aus Attributen zusammensetzen.
 *
 * @param aromaFamily - Aroma-Richtung ('citrus-fresh' | 'floral' | 'dark-spice')
 * @param sweetness - Süße-Profil ('round' | 'dry' | 'deep')
 * @param bitter - Ob Bitterkeit eine Rolle spielt
 * @returns Array von Profil-Tags
 */
const resolveProfile = (
  aromaFamily: string,
  sweetness: string,
  bitter: boolean
): string[] => {
  const tags: string[] = []
  if (aromaFamily === 'citrus-fresh') tags.push('frisch', 'zitrisch')
  if (aromaFamily === 'floral')       tags.push('blumig', 'elegant')
  if (aromaFamily === 'dark-spice')   tags.push('tief', 'würzig')
  if (sweetness === 'round')          tags.push('rund')
  if (sweetness === 'dry')            tags.push('trocken')
  if (sweetness === 'deep')           tags.push('warm')
  if (bitter)                         tags.push('charaktervoll')
  return tags
}

/**
 * Generischer Drink-Name aus Aroma + Modus wenn kein Anchor-Match.
 *
 * @param aromaFamily - Aroma-Richtung ('citrus-fresh' | 'floral' | 'dark-spice')
 * @param abvLevel - Alkohol-Level ('none' | 'low' | 'full')
 * @param sparkling - Ob der Drink Kohlensäure enthält
 * @returns Generischer Drink-Name
 */
const resolveName = (
  aromaFamily: string,
  abvLevel: string,
  sparkling: boolean
): string => {
  const aroma = aromaFamily === 'citrus-fresh' ? 'Fraîcheur'
              : aromaFamily === 'floral'        ? 'Fleur'
              : 'Mystère'
  const modus = abvLevel === 'none' ? 'Libre'
              : abvLevel === 'low'  ? 'Léger'
              : 'Signature'
  const spar  = sparkling ? ' Perlé' : ''
  return `${aroma} ${modus}${spar}`
}

/**
 * Kern-Funktion der Drink-Engine.
 * Gibt für jeden der 81 möglichen SliderStates ein vollständiges DrinkResult zurück.
 *
 * Strategie:
 * 1. Prüft ob ein benannter Anchor-Drink für diese Kombination existiert.
 * 2. Falls nicht: generiert einen Drink aus den Attributen (Fallback).
 *
 * Die Funktion ist eine pure function ohne Side Effects — gleicher Input ergibt
 * immer gleichen Output.
 *
 * @param state - Die vier Regler-Positionen [0-2, 0-2, 0-2, 0-2]
 * @returns Ein vollständiges DrinkResult — niemals undefined
 * @example
 * drinkEngine([2, 2, 2, 2]) // → Hemingway Sombre (Anchor-Match)
 * drinkEngine([0, 1, 2, 1]) // → Generierter Fallback-Drink
 */
export const drinkEngine = (state: SliderState): DrinkResult => {
  // 1. Anchor-Match prüfen
  const anchor = findAnchorDrink(state)
  if (anchor) return anchor

  // 2. Attribut-basierter Fallback
  const { abend, haltung, spur, modus } = getAttributes(state)
  const baseKey = `${modus.baseCategory}-${haltung.sweetness}`

  return {
    name:         resolveName(spur.aromaFamily, modus.abvLevel, abend.sparkling),
    story:        'Ein persönlicher Ritz-Moment, komponiert nach Ihren Präferenzen.',
    base:         FALLBACK_BASE[baseKey] ?? 'Hauskomposition',
    accents:      FALLBACK_ACCENTS[spur.aromaFamily] ?? [],
    glass:        resolveGlass(abend.glass, abend.sparkling),
    garnish:      FALLBACK_GARNISH[spur.garnishStyle] ?? 'Zitronenzeste',
    profile:      resolveProfile(spur.aromaFamily, haltung.sweetness, haltung.bitter),
    abvLevel:     modus.abvLevel,
    seasonalNote: SEASONAL_NOTE,
  }
}
