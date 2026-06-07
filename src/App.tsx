import { useState } from 'react'
import { SliderPanel } from './components/SliderPanel'
import { ResultCard } from './components/ResultCard'
import { drinkEngine } from './engine/drinkEngine'
import { type SliderState } from './types/drink'
import { translations, getSavedLang, saveLang, type Lang } from './i18n'
import './App.css'

/** Die drei verfügbaren Sprachen als geordnetes Array für den Umschalter. */
const LANGS: Lang[] = ['fr', 'en', 'de']

/**
 * Root-Komponente des Ritz Paris Cocktail Creator Widget.
 * Verwaltet SliderState und aktive Sprache (localStorage-persistent).
 *
 * @returns Das vollständige Widget-Layout
 */
function App() {
  const [sliderState, setSliderState] = useState<SliderState>([0, 0, 0, 0])
  const [touched, setTouched] = useState<[boolean, boolean, boolean, boolean]>([false, false, false, false])
  const [lang, setLang] = useState<Lang>(getSavedLang)
  const t = translations[lang]
  const drink = drinkEngine(sliderState, t.drinks)

  const handleLang = (l: Lang) => {
    setLang(l)
    saveLang(l)
  }

  const handleSliderChange = (state: SliderState, nextTouched: [boolean, boolean, boolean, boolean]) => {
    setSliderState(state)
    setTouched(nextTouched)
  }

  return (
    <main className="ritz-page">
      <div className="ritz-widget">

        {/* ── Intro ─────────────────────────────────────────────────── */}
        <header className="ritz-intro">
          <div className="ritz-lang-switch" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                className={`ritz-lang-btn${lang === l ? ' ritz-lang-btn--active' : ''}`}
                onClick={() => handleLang(l)}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="ritz-intro__eyebrow">{t.intro.eyebrow}</p>
          <h1 className="ritz-intro__headline">{t.intro.headline}</h1>
          <p className="ritz-intro__subline">{t.intro.subline}</p>
          <div className="ritz-intro__divider" aria-hidden="true" />
        </header>

        {/* ── Slider Panel ──────────────────────────────────────────── */}
        <SliderPanel
          state={sliderState}
          touched={touched}
          onChange={handleSliderChange}
          sliders={t.sliders}
        />

        {/* ── Result Card ───────────────────────────────────────────── */}
        <ResultCard
          key={!touched.some(Boolean) ? 'quote' : !touched.every(Boolean) ? 'progress' : sliderState.join('-')}
          drink={drink}
          state={sliderState}
          touched={touched}
          t={t.card}
          quote={t.quote}
          pdf={t.pdf}
        />

      </div>
    </main>
  )
}

export default App
