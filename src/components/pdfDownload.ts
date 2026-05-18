import { pdf } from '@react-pdf/renderer'
import { createElement } from 'react'
import { type DrinkResult, type SliderState } from '../types/drink'
import { generateCode } from '../engine/codeGenerator'
import { PdfCard } from './PdfCard'

/**
 * Erstellt einen Blob-Download der PDF-Rezeptkarte.
 * Wird vom Download-Button in ResultCard aufgerufen.
 *
 * @param drink - DrinkResult
 * @param state - SliderState
 * @returns Promise<void> — löst Browser-Download aus
 */
export async function downloadPdf(drink: DrinkResult, state: SliderState): Promise<void> {
  const blob = await pdf(createElement(PdfCard, { drink, state })).toBlob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `ritz-paris-${generateCode(state).toLowerCase()}.pdf`
  a.click()
  URL.revokeObjectURL(url)
}
