import { type SliderState, type DrinkResult } from '../types/drink'
import { getAttributes } from './attributes'
import { findAnchorDrink } from '../data/drinks'
import { type DrinkLocale } from '../i18n/types'

/**
 * Kern-Funktion der Drink-Engine.
 * Gibt für jeden der 81 möglichen SliderStates ein vollständiges DrinkResult zurück.
 *
 * Strategie:
 * 1. Prüft ob ein benannter Anchor-Drink für diese Kombination existiert.
 * 2. Falls nicht: generiert einen Drink aus den Attributen (Fallback).
 *
 * @param state - Die vier Regler-Positionen [0-2, 0-2, 0-2, 0-2]
 * @param locale - Lokalisierte Drink-Inhalte aus der aktiven Sprache
 * @returns Ein vollständiges DrinkResult — niemals undefined
 * @example
 * drinkEngine([2, 2, 2, 2], t.drinks) // → Hemingway Sombre (lokalisiert)
 */
export const drinkEngine = (state: SliderState, locale: DrinkLocale): DrinkResult => {
  const anchor = findAnchorDrink(state)
  const key = state.join('-')
  const localContent = locale.anchors[key]

  if (anchor && localContent) {
    return {
      ...anchor,
      story:   localContent.story,
      base:    localContent.base,
      accents: localContent.accents,
      glass:   localContent.glass,
      garnish: localContent.garnish,
      profile: localContent.profile,
    }
  }

  // Fallback — generierter Drink
  const { abend, haltung, spur, modus } = getAttributes(state)
  const baseKey = `${modus.baseCategory}-${haltung.sweetness}`

  const resolveProfile = (): string[] => {
    const tags: string[] = []
    tags.push(locale.profileTags[spur.aromaFamily] ?? '')
    tags.push(locale.profileTags[`${spur.aromaFamily}-2`] ?? '')
    if (haltung.sweetness === 'round') tags.push(locale.profileTags['round'] ?? '')
    if (haltung.sweetness === 'dry')   tags.push(locale.profileTags['dry'] ?? '')
    if (haltung.sweetness === 'deep')  tags.push(locale.profileTags['deep'] ?? '')
    if (haltung.bitter)                tags.push(locale.profileTags['bitter'] ?? '')
    return tags.filter(Boolean)
  }

  const resolveName = (): string => {
    const aroma = spur.aromaFamily === 'citrus-fresh' ? 'Fraîcheur'
                : spur.aromaFamily === 'floral'        ? 'Fleur'
                : 'Mystère'
    const mod = modus.abvLevel === 'none' ? 'Libre'
              : modus.abvLevel === 'low'  ? 'Léger'
              : 'Signature'
    const spar = abend.sparkling ? ' Perlé' : ''
    return `${aroma} ${mod}${spar}`
  }

  return {
    name:         resolveName(),
    story:        locale.fallbackStory,
    base:         locale.fallbackBase[baseKey] ?? locale.fallbackBase['spirit-dry'] ?? '',
    accents:      locale.fallbackAccents[spur.aromaFamily] ?? [],
    glass:        abend.sparkling ? locale.glassHighball : abend.glass,
    garnish:      locale.fallbackGarnish[spur.garnishStyle] ?? '',
    profile:      resolveProfile(),
    abvLevel:     modus.abvLevel,
    seasonalNote: '',
  }
}
