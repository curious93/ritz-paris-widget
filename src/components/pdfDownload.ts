import { pdf } from '@react-pdf/renderer'
import { createElement } from 'react'
import { type DrinkResult, type SliderState } from '../types/drink'
import { type Translations } from '../i18n/types'
import { generateCode } from '../engine/codeGenerator'
import { PdfCard } from './PdfCard'

/**
 * Erstellt einen Blob-Download der PDF-Rezeptkarte.
 * Wird vom Download-Button in ResultCard aufgerufen.
 *
 * @param drink - DrinkResult
 * @param state - SliderState
 * @param t - Lokalisierte Card-Texte
 * @param pdfT - Lokalisierte PDF-Texte
 * @returns Promise<void> — löst Browser-Download aus
 */
export async function downloadPdf(
  drink: DrinkResult,
  state: SliderState,
  t: Translations['card'],
  pdfT: Translations['pdf'],
): Promise<void> {
  const blob = await pdf(createElement(PdfCard, { drink, state, t, pdf: pdfT })).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `ritz-paris-${generateCode(state).replace(/ · /g, '-').toLowerCase()}.pdf`
  a.click()
  URL.revokeObjectURL(url)
}
