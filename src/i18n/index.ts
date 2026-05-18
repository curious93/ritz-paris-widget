import { de } from './de'
import { en } from './en'
import { fr } from './fr'
import { type Translations } from './types'

/** Unterstützte Sprach-Codes. */
export type Lang = 'de' | 'en' | 'fr'

/** Alle verfügbaren Übersetzungen. */
export const translations: Record<Lang, Translations> = { de, en, fr }

/**
 * Liest die gespeicherte Sprache aus localStorage.
 * Fällt auf 'de' zurück wenn kein gültiger Wert gespeichert ist.
 *
 * @returns Der gespeicherte Lang-Code oder 'de'
 */
export const getSavedLang = (): Lang => {
  const saved = localStorage.getItem('ritz-lang')
  return (saved === 'de' || saved === 'en' || saved === 'fr') ? saved : 'de'
}

/**
 * Speichert den gewählten Lang-Code in localStorage.
 *
 * @param lang - Der zu speichernde Lang-Code
 */
export const saveLang = (lang: Lang): void => {
  localStorage.setItem('ritz-lang', lang)
}

export type { Translations }
