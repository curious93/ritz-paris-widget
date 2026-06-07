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
    codeLabel:    string
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
  /**
   * Lokalisierte Drink-Inhalte (story, base, accents, glass, garnish)
   * für alle 27 Anchor-Drinks + Fallback-Engine-Strings.
   * Key = SliderState als String z.B. "0-0-0-0"
   */
  drinks: DrinkLocale
}

/** Lokalisierter Inhalt eines einzelnen Anchor-Drinks. */
export interface DrinkContent {
  /** Atmosphärische Beschreibung */
  story: string
  /** Basis-Zutat */
  base: string
  /** Aromatische Akzente */
  accents: string[]
  /** Glastyp */
  glass: string
  /** Garnitur */
  garnish: string
  /** Profil-Tags */
  profile: string[]
}

/** Alle lokalisierten Drink-Inhalte. Key = "modus-abend-haltung-spur" */
export interface DrinkLocale {
  /** Anchor-Drinks, key z.B. "2-2-2-2" */
  anchors: Record<string, DrinkContent>
  /** Fallback-Story wenn kein Anchor-Match */
  fallbackStory: string
  /** Fallback-Basis-Zutaten, key z.B. "spirit-dry" */
  fallbackBase: Record<string, string>
  /** Fallback-Akzente, key z.B. "citrus-fresh" */
  fallbackAccents: Record<string, string[]>
  /** Fallback-Garnituren, key z.B. "herb-citrus" */
  fallbackGarnish: Record<string, string>
  /** Fallback-Glastyp wenn sparkling */
  glassHighball: string
  /** Profil-Tags nach aromaFamily + sweetness */
  profileTags: Record<string, string>
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
