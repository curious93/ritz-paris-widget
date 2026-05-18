import { useState } from 'react'
import { SliderPanel } from './components/SliderPanel'
import { ResultCard } from './components/ResultCard'
import { drinkEngine } from './engine/drinkEngine'
import { type SliderState } from './types/drink'
import './App.css'

/**
 * Root-Komponente des Ritz Paris Cocktail Creator Widget.
 * Verwaltet den globalen SliderState und rendert Shell-Layout,
 * SliderPanel und ResultCard.
 *
 * @returns Das vollständige Widget-Layout
 */
function App() {
  const [sliderState, setSliderState] = useState<SliderState>([0, 0, 0, 0])
  const drink = drinkEngine(sliderState)

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

        {/* ── Result Card — key triggers re-animation on every change ─ */}
        <ResultCard
          key={sliderState.join('-')}
          drink={drink}
          state={sliderState}
        />

      </div>
    </main>
  )
}

export default App
