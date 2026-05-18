import { type SliderState } from '../types/drink'
import { type SliderT } from '../i18n/types'
import './SliderPanel.css'

/** Props für eine einzelne Slider-Zeile. */
interface SingleSliderProps {
  /** Konfiguration dieser Slider-Zeile (aus aktiver Sprache) */
  config: SliderT
  /** Aktuell aktive Position dieses Reglers */
  value: 0 | 1 | 2
  /** Ob dieser Regler bereits berührt wurde */
  touched: boolean
  /** Callback wenn der Nutzer eine neue Position wählt */
  onChange: (value: 0 | 1 | 2) => void
}

/**
 * Eine einzelne Slider-Zeile mit Frage, drei anklickbaren Positionen und Subline.
 *
 * @param props - Komponenten-Props
 * @param props.config - Konfiguration dieser Slider-Zeile
 * @param props.value - Aktuell aktive Position
 * @param props.touched - Ob der Regler bereits eine Auswahl hat
 * @param props.onChange - Callback bei Positionswechsel
 * @returns Eine Slider-Zeile
 */
function SingleSlider({ config, value, touched, onChange }: SingleSliderProps) {
  return (
    <div className="ritz-slider">
      <p className="ritz-slider__question">{config.question}</p>

      <div className="ritz-slider__track" role="group" aria-label={config.question}>
        {config.positions.map((pos, i) => {
          const isActive = touched && value === i
          return (
            <button
              key={i}
              type="button"
              className={`ritz-slider__btn${isActive ? ' ritz-slider__btn--active' : ''}`}
              onClick={() => onChange(i as 0 | 1 | 2)}
              aria-pressed={isActive}
            >
              {pos.label}
            </button>
          )
        })}
      </div>

      <p className={`ritz-slider__subline${touched ? '' : ' ritz-slider__subline--hidden'}`} key={value}>
        {config.positions[value].subline}
      </p>
    </div>
  )
}

/** Props für das gesamte SliderPanel. */
interface SliderPanelProps {
  /** Aktueller Zustand aller vier Regler */
  state: SliderState
  /** Welche Regler bereits berührt wurden */
  touched: [boolean, boolean, boolean, boolean]
  /** Callback wenn ein Regler geändert wird */
  onChange: (state: SliderState, touched: [boolean, boolean, boolean, boolean]) => void
  /** Slider-Konfigurationen aus der aktiven Sprache */
  sliders: [SliderT, SliderT, SliderT, SliderT]
}

/**
 * Panel mit allen vier Ritz-Reglern.
 * Slider-Texte kommen aus der aktiven Sprache via `sliders`-Prop.
 *
 * @param props - Komponenten-Props
 * @param props.state - Aktueller Zustand aller vier Regler
 * @param props.touched - Welche Regler bereits berührt wurden
 * @param props.onChange - Callback bei Regler-Änderung
 * @param props.sliders - Lokalisierte Slider-Konfigurationen
 * @returns Das vollständige 4-Regler-Panel
 */
export function SliderPanel({ state, touched, onChange, sliders }: SliderPanelProps) {
  const handleChange = (index: 0 | 1 | 2 | 3, value: 0 | 1 | 2) => {
    const next = [...state] as SliderState
    next[index] = value
    const nextTouched = [...touched] as [boolean, boolean, boolean, boolean]
    nextTouched[index] = true
    onChange(next, nextTouched)
  }

  return (
    <div className="ritz-slider-panel">
      {([0, 1, 2, 3] as const).map((i) => (
        <SingleSlider
          key={i}
          config={sliders[i]}
          value={state[i]}
          touched={touched[i]}
          onChange={(v) => handleChange(i, v)}
        />
      ))}
    </div>
  )
}
