import { type SliderState } from '../types/drink'

/** Präfix-Kürzel pro Regler-Position für lesbaren Code. */
const MODUS_CODE   = ['NA', 'LW', 'SG'] as const
const ABEND_CODE   = ['ST', 'EL', 'GL'] as const
const HALTUNG_CODE = ['SA', 'PR', 'CH'] as const
const SPUR_CODE    = ['FR', 'BL', 'GH'] as const

/**
 * Generiert einen kurzen, deterministischen persönlichen Code aus dem SliderState.
 *
 * Format: zwei Buchstaben pro Regler, getrennt durch Bindestrich, z.B. "ST-PR-FR-SG".
 * Gleiche Auswahl ergibt immer denselben Code — reproducierbar und später als
 * URL-Parameter verwendbar.
 *
 * @param state - Die vier Regler-Positionen [0-2, 0-2, 0-2, 0-2]
 * @returns Persönlicher Code, max. 11 Zeichen, z.B. "GL-CH-GH-SG"
 * @example
 * generateCode([2, 2, 2, 2]) // → "GL-CH-GH-SG"
 * generateCode([0, 0, 0, 0]) // → "ST-SA-FR-NA"
 */
export const generateCode = (state: SliderState): string =>
  [
    MODUS_CODE[state[0]],
    ABEND_CODE[state[1]],
    HALTUNG_CODE[state[2]],
    SPUR_CODE[state[3]],
  ].join(' · ')
