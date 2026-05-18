import { useState } from 'react'
import { SliderPanel } from './components/SliderPanel'
import { type SliderState } from './types/drink'
import './App.css'

/**
 * Root-Komponente des Ritz Paris Cocktail Creator Widget.
 * Verwaltet den globalen SliderState und rendert Shell-Layout,
 * SliderPanel (Issue #3) und ResultCard-Platzhalter (Issue #6).
 *
 * @returns Das vollständige Widget-Layout
 */
function App() {
  const [sliderState, setSliderState] = useState<SliderState>([0, 0, 0, 0])

  return (
    <main className="ritz-page">
      <div className="ritz-widget">

        {/* ── Intro ─────────────────────────────────────────────────── */}
        <header className="ritz-intro">
          <p className="ritz-intro__eyebrow">Bar Hemingway · Place Vendôme</p>
          <h1 className="ritz-intro__headline">
            Komponieren Sie Ihren Ritz‑Abend.
          </h1>
          <p className="ritz-intro__subline">
            Ein Abend an der Place Vendôme beginnt mit einem Gefühl: ein wenig
            Licht, ein wenig Musik, ein Hauch Geschichte in der Luft. Wählen Sie
            den Ton Ihres Abends und erhalten Sie ein persönliches
            Cocktail‑Rezept, inspiriert vom Geist des Ritz Paris.
          </p>
          <div className="ritz-intro__divider" aria-hidden="true" />
        </header>

        {/* ── Slider Panel ──────────────────────────────────────────── */}
        <SliderPanel state={sliderState} onChange={setSliderState} />

        {/* ── Result Card — Issue #6 ────────────────────────────────── */}
        <section className="ritz-card-placeholder" aria-label="Ihr persönlicher Drink">
          <p className="ritz-placeholder-label">
            Ergebnis-Card folgt in Issue #6
          </p>
        </section>

      </div>
    </main>
  )
}

export default App
