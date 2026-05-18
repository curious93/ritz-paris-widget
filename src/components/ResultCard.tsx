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
  /** Lokalisierte Card-Texte aus der aktiven Sprache */
  t: Translations['card']
}

/**
 * Zeigt das vollständige Drink-Ergebnis an.
 * Animiert bei jeder State-Änderung neu (via `key` in App.tsx).
 *
 * @param props - Komponenten-Props
 * @param props.drink - Aktueller DrinkResult
 * @param props.state - Aktueller SliderState für Code-Generierung
 * @param props.t - Lokalisierte Texte für Labels und Buttons
 * @returns Die Ergebnis-Card
 */
export function ResultCard({ drink, state, t }: ResultCardProps) {
  const code = generateCode(state)
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)
    await downloadPdf(drink, state)
    setDownloading(false)
  }

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
