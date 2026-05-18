/**
 * Vollständige Übersetzungs-Struktur für eine Sprache.
 * Alle Felder sind Pflicht — kein optionales Fallback.
 */
export interface Translations {
  /** Intro-Block oben im Widget */
  intro: {
    /** Kleines Label über der Headline */
    eyebrow: string
    /** Haupt-Headline */
    headline: string
    /** Erklärungstext (nur auf Mobile sichtbar) */
    subline: string
  }
  /** Konfiguration der vier Slider — Reihenfolge: modus, abend, haltung, spur */
  sliders: [SliderT, SliderT, SliderT, SliderT]
  /** Texte der Ergebnis-Card */
  card: {
    eyebrow:      string
    subeyebrow:   string
    basis:        string
    aromatik:     string
    glas:         string
    garnitur:     string
    pdfButton:    string
    pdfLoading:   string
    disclaimer:   string
    seasonalNote: string
  }
  /** Initiales Zitat (vor erster Auswahl) */
  quote: {
    /** Der Zitattext */
    text: string
    /** Autor und Kontext */
    attribution: string
    /** CTA unter dem Pfeil */
    cta: string
    /** Platzhalter in der Card wenn ein Regler noch nicht gewählt wurde */
    pending: string
  }
  /** Texte für die PDF-Karte */
  pdf: {
    byline: string
    footer: string
  }
  /** Kürzel für den Sprachumschalter, z.B. "DE" */
  langLabel: string
}

/** Konfiguration eines einzelnen Sliders. */
export interface SliderT {
  /** Frage an den Nutzer */
  question: string
  /** Die drei Positionen */
  positions: [SliderPositionT, SliderPositionT, SliderPositionT]
}

/** Eine Slider-Position mit Label und Subline. */
export interface SliderPositionT {
  /** Kurzes Label auf dem Button */
  label: string
  /** Erklärende Subline */
  subline: string
}
