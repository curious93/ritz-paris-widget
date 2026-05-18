import { useState } from 'react'
import { type DrinkResult, type SliderState } from '../types/drink'
import { type Translations } from '../i18n/types'
import { generateCode } from '../engine/codeGenerator'
import { downloadPdf } from './pdfDownload'
import './ResultCard.css'

/** Props für die Ergebnis-Card. */
interface ResultCardProps {
  /** Aktueller Drink — wird bei jeder Regler-Änderung neu übergeben */
  drink: DrinkResult
  /** SliderState für Code-Generierung */
  state: SliderState
  /** Welche Regler bereits berührt wurden */
  touched: [boolean, boolean, boolean, boolean]
  /** Lokalisierte Card-Texte aus der aktiven Sprache */
  t: Translations['card']
  /** Zitat-Texte für den initialen Zustand */
  quote: Translations['quote']
}

/**
 * Zeigt das vollständige Drink-Ergebnis an.
 * Vor erster Auswahl: Hemingway-Zitat mit Pfeil-CTA.
 * Nach erster Auswahl: Card-Struktur mit Platzhaltern.
 * Nach vollständiger Auswahl: vollständige Drink-Card.
 *
 * @param props - Komponenten-Props
 * @param props.drink - Aktueller DrinkResult
 * @param props.state - Aktueller SliderState für Code-Generierung
 * @param props.touched - Welche Regler bereits berührt wurden
 * @param props.t - Lokalisierte Texte für Labels und Buttons
 * @param props.quote - Zitat-Texte für den initialen Zustand
 * @returns Die Ergebnis-Card
 */
export function ResultCard({ drink, state, touched, t, quote }: ResultCardProps) {
  const code = generateCode(state)
  const [downloading, setDownloading] = useState(false)

  const touchedCount = touched.filter(Boolean).length
  const hasAll = touchedCount === 4

  const handleDownload = async () => {
    setDownloading(true)
    await downloadPdf(drink, state)
    setDownloading(false)
  }

  /* ── Noch nicht alle gewählt: Zitat + Fortschritt ─────────────────────── */
  if (!hasAll) {
    return (
      <section className="ritz-card ritz-card--quote" aria-label="Zitat">
        <blockquote className="ritz-card__quote-text">
          {quote.text}
        </blockquote>
        <p className="ritz-card__quote-attr">{quote.attribution}</p>
        {touchedCount === 0 ? (
          <>
            <div className="ritz-card__quote-arrow" aria-hidden="true">←</div>
            <p className="ritz-card__quote-cta">{quote.cta}</p>
          </>
        ) : (
          <div className="ritz-card__progress" aria-label={`${touchedCount} von 4 gewählt`}>
            {([0, 1, 2, 3] as const).map((i) => (
              <div
                key={i}
                className={`ritz-card__progress-dot${touched[i] ? ' ritz-card__progress-dot--done' : ''}`}
              />
            ))}
            <span className="ritz-card__progress-label">{touchedCount} / 4</span>
          </div>
        )}
      </section>
    )
  }

  /* ── Alle 4 gewählt: volle Drink-Card ──────────────────────────────────── */
  return (
    <section className="ritz-card" aria-label={t.eyebrow} aria-live="polite">

      {/* ── Drink-Name ─────────────────────────────────────────────── */}
      <div className="ritz-card__header">
        <p className="ritz-card__eyebrow">{t.eyebrow}</p>
        <h2 className="ritz-card__name">{drink.name}</h2>
        <div className="ritz-card__divider" aria-hidden="true" />
      </div>

      {/* ── Story ──────────────────────────────────────────────────── */}
      <p className="ritz-card__story">{drink.story}</p>

      {/* ── Details ────────────────────────────────────────────────── */}
      <dl className="ritz-card__details">
        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">{t.basis}</dt>
          <dd className="ritz-card__detail-value">{drink.base}</dd>
        </div>
        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">{t.aromatik}</dt>
          <dd className="ritz-card__detail-value">{drink.accents.join(' · ')}</dd>
        </div>
        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">{t.glas}</dt>
          <dd className="ritz-card__detail-value">{drink.glass}</dd>
        </div>
        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">{t.garnitur}</dt>
          <dd className="ritz-card__detail-value">{drink.garnish}</dd>
        </div>
      </dl>

      {/* ── Profil-Tags ────────────────────────────────────────────── */}
      <ul className="ritz-card__profile" aria-label="Profil" role="list">
        {drink.profile.map((tag) => (
          <li key={tag} className="ritz-card__tag">{tag}</li>
        ))}
      </ul>

      {/* ── Trennlinie ─────────────────────────────────────────────── */}
      <div className="ritz-card__divider ritz-card__divider--bottom" aria-hidden="true" />

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <div className="ritz-card__footer">
        <div className="ritz-card__footer-top">
          <p className="ritz-card__code" aria-label={code}>{code}</p>
          <button
            type="button"
            className="ritz-card__pdf-btn"
            onClick={handleDownload}
            disabled={downloading}
            aria-label={t.pdfButton}
          >
            {downloading ? t.pdfLoading : t.pdfButton}
          </button>
        </div>
        <p className="ritz-card__seasonal">{t.seasonalNote}</p>
        {drink.abvLevel === 'full' && (
          <p className="ritz-card__disclaimer" role="note">{t.disclaimer}</p>
        )}
      </div>

    </section>
  )
}
