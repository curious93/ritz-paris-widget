import { type DrinkResult, type SliderState } from '../types/drink'
import { generateCode } from '../engine/codeGenerator'
import './ResultCard.css'

/** Props für die Ergebnis-Card. */
interface ResultCardProps {
  /** Aktueller Drink — wird bei jeder Regler-Änderung neu übergeben */
  drink: DrinkResult
  /** SliderState für Code-Generierung */
  state: SliderState
}

/**
 * Zeigt das vollständige Drink-Ergebnis an.
 * Animiert bei jeder State-Änderung neu (via `key` in App.tsx).
 *
 * @param props - Komponenten-Props
 * @param props.drink - Aktueller DrinkResult
 * @param props.state - Aktueller SliderState für Code-Generierung
 * @returns Die Ergebnis-Card
 */
export function ResultCard({ drink, state }: ResultCardProps) {
  const code = generateCode(state)

  return (
    <section className="ritz-card" aria-label="Ihr persönlicher Drink" aria-live="polite">

      {/* ── Drink-Name ─────────────────────────────────────────────── */}
      <div className="ritz-card__header">
        <p className="ritz-card__eyebrow">Ihre persönliche Komposition</p>
        <h2 className="ritz-card__name">{drink.name}</h2>
        <div className="ritz-card__divider" aria-hidden="true" />
      </div>

      {/* ── Story ──────────────────────────────────────────────────── */}
      <p className="ritz-card__story">{drink.story}</p>

      {/* ── Details ────────────────────────────────────────────────── */}
      <dl className="ritz-card__details">
        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">Basis</dt>
          <dd className="ritz-card__detail-value">{drink.base}</dd>
        </div>

        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">Aromatik</dt>
          <dd className="ritz-card__detail-value">{drink.accents.join(' · ')}</dd>
        </div>

        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">Glas</dt>
          <dd className="ritz-card__detail-value">{drink.glass}</dd>
        </div>

        <div className="ritz-card__detail-row">
          <dt className="ritz-card__detail-label">Garnitur</dt>
          <dd className="ritz-card__detail-value">{drink.garnish}</dd>
        </div>
      </dl>

      {/* ── Profil-Tags ────────────────────────────────────────────── */}
      <ul className="ritz-card__profile" aria-label="Geschmacksprofil" role="list">
        {drink.profile.map((tag) => (
          <li key={tag} className="ritz-card__tag">{tag}</li>
        ))}
      </ul>

      {/* ── Trennlinie ─────────────────────────────────────────────── */}
      <div className="ritz-card__divider ritz-card__divider--bottom" aria-hidden="true" />

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <div className="ritz-card__footer">
        <p className="ritz-card__code" aria-label={`Persönlicher Code: ${code}`}>
          {code}
        </p>
        <p className="ritz-card__seasonal">{drink.seasonalNote}</p>
        {drink.abvLevel === 'full' && (
          <p className="ritz-card__disclaimer" role="note">
            Dieser Drink enthält Alkohol. Genuss in Maßen — Bitte trinken Sie verantwortungsvoll.
            Nicht geeignet für Personen unter 18 Jahren.
          </p>
        )}
      </div>

    </section>
  )
}
