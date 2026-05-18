import { type SliderConfig, type SliderState } from '../types/drink'
import './SliderPanel.css'

/** Verbindliche Regler-Konfiguration — Reihenfolge: Modus, Abend, Haltung, Aromatik. */
const SLIDER_CONFIG: [SliderConfig, SliderConfig, SliderConfig, SliderConfig] = [
  {
    question: 'Ihr Modus',
    positions: [
      { label: 'Sans alcool',    subline: 'Tee, Verjus, Frucht, Kräuter, Sparkling Tea' },
      { label: 'Leicht',         subline: 'Low-ABV — Vermouth, Apéritif, Champagne' },
      { label: 'Signature 18+',  subline: 'Gin, Cognac, Calvados, Rum oder Vodka' },
    ],
  },
  {
    question: 'Wie beginnt Ihr Abend?',
    positions: [
      { label: 'Still & privat',     subline: 'Kurzer, ruhiger Drink — wenig Kohlensäure, diskrete Präsenz' },
      { label: 'Elegant & offen',    subline: 'Ausbalanciert, leichte Frische — für einen geselligen Auftakt' },
      { label: 'Glanzvoll & sichtbar', subline: 'Längerer, funkelnder Drink — Champagne oder Soda, volle Präsenz' },
    ],
  },
  {
    question: 'Welche Haltung passt zu Ihnen?',
    positions: [
      { label: 'Sanft',          subline: 'Weiche Säure, runde Süße, niedrigere Intensität' },
      { label: 'Präzise',        subline: 'Klarer Aufbau, trockener, zitrisch, definierte Balance' },
      { label: 'Charaktervoll',  subline: 'Mehr Tiefe, Bitters, Gewürz, stärkere Basisnote' },
    ],
  },
  {
    question: 'Welche Aromatik spricht Sie an?',
    positions: [
      { label: 'Frisch',         subline: 'Zitrus, Apfel, Minze, Gurke — helle, klare Aromatik' },
      { label: 'Blumig',         subline: 'Jasmin, Rose, Holunder, Pfirsich — elegante Garnitur' },
      { label: 'Geheimnisvoll',  subline: 'Orange, Kakao, Tee, Gewürz — dunkle, warme Aromatik' },
    ],
  },
]

/** Props für eine einzelne Slider-Zeile. */
interface SingleSliderProps {
  /** Index 0–3, bestimmt welche SLIDER_CONFIG-Zeile verwendet wird */
  index: 0 | 1 | 2 | 3
  /** Aktuell aktive Position dieses Reglers */
  value: 0 | 1 | 2
  /** Callback wenn der Nutzer eine neue Position wählt */
  onChange: (value: 0 | 1 | 2) => void
}

/**
 * Eine einzelne Slider-Zeile mit Frage, drei anklickbaren Positionen und Subline.
 *
 * @param props - Komponenten-Props
 * @param props.index - Index 0–3, bestimmt welche SLIDER_CONFIG-Zeile verwendet wird
 * @param props.value - Aktuell aktive Position dieses Reglers
 * @param props.onChange - Callback wenn der Nutzer eine neue Position wählt
 * @returns Eine Slider-Zeile
 */
function SingleSlider({ index, value, onChange }: SingleSliderProps) {
  const config = SLIDER_CONFIG[index]

  return (
    <div className="ritz-slider">
      <p className="ritz-slider__question">{config.question}</p>

      {/* Drei Positions-Buttons */}
      <div className="ritz-slider__track" role="group" aria-label={config.question}>
        {config.positions.map((pos, i) => {
          const isActive = value === i
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

      {/* Subline der aktiven Position */}
      <p className="ritz-slider__subline" key={value}>
        {config.positions[value].subline}
      </p>
    </div>
  )
}

/** Props für das gesamte SliderPanel. */
interface SliderPanelProps {
  /** Aktueller Zustand aller vier Regler */
  state: SliderState
  /** Callback wenn ein Regler geändert wird */
  onChange: (state: SliderState) => void
}

/**
 * Panel mit allen vier Ritz-Reglern.
 * Kapselt die gesamte Nutzer-Konfiguration des Cocktail Creators.
 *
 * @param props - Komponenten-Props
 * @param props.state - Aktueller Zustand aller vier Regler
 * @param props.onChange - Callback wenn ein Regler geändert wird
 * @returns Das vollständige 4-Regler-Panel
 */
export function SliderPanel({ state, onChange }: SliderPanelProps) {
  /**
   * Aktualisiert einen einzelnen Regler und gibt den neuen Gesamt-State zurück.
   *
   * @param index - Welcher der vier Regler geändert wurde (0–3)
   * @param value - Neue Position (0–2)
   * @returns void
   */
  const handleChange = (index: 0 | 1 | 2 | 3, value: 0 | 1 | 2) => {
    const next = [...state] as SliderState
    next[index] = value
    onChange(next)
  }

  return (
    <div className="ritz-slider-panel">
      {([0, 1, 2, 3] as const).map((i) => (
        <SingleSlider
          key={i}
          index={i}
          value={state[i]}
          onChange={(v) => handleChange(i, v)}
        />
      ))}
    </div>
  )
}
