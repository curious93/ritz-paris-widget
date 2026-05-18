/**
 * Repräsentiert die Auswahl des Nutzers über alle vier Regler.
 * Jeder Wert ist 0 | 1 | 2 (die drei Positionen des Reglers).
 */
export type SliderState = [
  /** Regler 1: Ihr Modus. 0=Sans alcool, 1=Leicht, 2=Signature 18+ */
  modus: 0 | 1 | 2,
  /** Regler 2: Wie beginnt Ihr Abend? 0=Still, 1=Elegant, 2=Glanzvoll */
  abend: 0 | 1 | 2,
  /** Regler 3: Welche Haltung? 0=Sanft, 1=Präzise, 2=Charaktervoll */
  haltung: 0 | 1 | 2,
  /** Regler 4: Welche Aromatik? 0=Frisch, 1=Blumig, 2=Geheimnisvoll */
  spur: 0 | 1 | 2,
]

/**
 * Das vollständige Ergebnis der Drink-Engine nach Slider-Auswahl.
 * Wird von ResultCard und PdfCard gerendert.
 */
export interface DrinkResult {
  /** Anzeigename, z.B. "Midnight Vendôme" */
  name: string
  /** Ein bis zwei Sätze atmosphärische Beschreibung im Ritz-Ton */
  story: string
  /** Basis-Spirituose oder Haupt-Komponente, z.B. "Cognac" oder "Sparkling Tea" */
  base: string
  /** Aromatische Akzente, z.B. ["Orange", "Verjus", "Kakao-Bitter"] */
  accents: string[]
  /** Glastyp, z.B. "Rocks Glass" oder "Flute" */
  glass: string
  /** Garnitur, z.B. "Orangenzeste" */
  garnish: string
  /** Kurze Profil-Tags, z.B. ["tief", "warm", "zitrisch"] */
  profile: string[]
  /** Alkohol-Stufe — bestimmt welcher Disclaimer gezeigt wird */
  abvLevel: 'none' | 'low' | 'full'
  /**
   * Hinweis auf saisonale Verfügbarkeit — immer anzeigen.
   * Rechtliche Anforderung: kein Versprechen auf genaue Reproduzierbarkeit.
   */
  seasonalNote: string
  /** Persönlicher Code — wird von codeGenerator.ts gesetzt, initial leer */
  code?: string
}

/**
 * Konfiguration einer einzelnen Slider-Position (Label + Subline).
 */
export interface SliderPosition {
  /** Kurzes Label, z.B. "Still & privat" */
  label: string
  /** Erklärende Subline für den Nutzer */
  subline: string
}

/**
 * Konfiguration eines kompletten Reglers mit Titel und drei Positionen.
 */
export interface SliderConfig {
  /** Frage an den Nutzer, z.B. "Wie beginnt Ihr Abend?" */
  question: string
  /** Die drei Positionen des Reglers */
  positions: [SliderPosition, SliderPosition, SliderPosition]
}
