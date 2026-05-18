# Ritz Paris Widget — Designsystem

Verbindliche Designquelle für alle UI-Entscheidungen im Widget.
Vor jeder Implementierung lesen. Kein hardcodierter Farbwert im Code — nur CSS-Custom-Properties.

**Quellen-Kennzeichnung:**
- `[RITZ]` — aus der Ritz Paris Website / öffentlichen Markenauftritten abgeleitet
- `[~APPROX]` — visuell approximiert, nicht exakt aus CSS extrahiert (bitte verifizieren)
- `[BRIEFING]` — direkt aus dem Projekt-Briefing übernommen

---

## 1. Tone of Voice

**Kernprinzip:** Eleganz durch Zurückhaltung. Das Widget spricht wie ein diskreter Concierge — informiert, warm, nie aufdringlich.

- **Sprache:** Französisch oder Deutsch, niemals informell
- **Anrede:** „Sie", niemals „Du" oder „you"
- **Formulierungen:** beschreibend, atmosphärisch — kein Marketing-Speak
  - ✅ „Ein Abend an der Place Vendôme beginnt mit einem Gefühl"
  - ✅ „komponiert für einen glanzvollen Auftakt"
  - ❌ „Jetzt deinen Traumdrink entdecken!"
  - ❌ „macht dich entspannter"
- **Alkohol:** nie mit positivem Sozialstatus verknüpfen — nur atmosphärisch beschreiben [BRIEFING]

---

## 2. Farbpalette

```css
:root {
  /* Primär — Elfenbein / Champagne [~APPROX: Ritz-Hintergründe sind gebrochenes Weiß, nicht reines Weiß] */
  --color-ivory:        #FAF7F2;  /* Seitenhintergrund, Card-Hintergrund */
  --color-ivory-warm:   #F5EFE4;  /* leicht wärmerer Ton für Hover-Flächen */

  /* Gold — das Ritz-Gold [~APPROX: Das Ritz verwendet ein warmes 18k-Gold] */
  --color-gold:         #C9A96E;  /* Akzente, aktiver Slider-Thumb, Drink-Name */
  --color-gold-light:   #E2C99A;  /* Gold auf hellem Grund, Hover-Shift */
  --color-gold-dark:    #A07840;  /* Gold auf dunklem Grund, tiefe Akzente */

  /* Schrift */
  --color-text-primary:   #1A1714;  /* Haupttext — fast schwarz, warm */
  --color-text-secondary: #6B5E52;  /* Sublines, Labels — warmes Mittelbraun */
  --color-text-muted:     #A89880;  /* Disclaimer, Hinweise, Timestamps */

  /* Linien & Borders */
  --color-border:       #E8DDD0;  /* Trennlinien, inaktive Slider-Spur */
  --color-border-fine:  #D4C4B0;  /* feine Ornament-Linien */

  /* Hintergrund-Tiefen */
  --color-bg-page:      #FFFFFF;  /* Seiten-Canvas — reines Weiß */
  --color-bg-widget:    #FAF7F2;  /* Widget-Hintergrund — Ivory */
  --color-bg-card:      #F9F5EE;  /* ResultCard-Hintergrund */

  /* Status / Compliance */
  --color-disclaimer:   #8A7060;  /* Responsible-Drinking-Hinweis — dezent */

  /* Nie verwenden: grelle Farben, gesättigtes Blau/Grün/Rot */
}
```

---

## 3. Typografie

### Schriftfamilien [~APPROX: Ritz verwendet klassische Serifen + diskrete Sans]

```css
:root {
  /* Headline / Drink-Name — klassische Serif */
  --font-display: 'Cormorant Garamond', 'Garamond', 'EB Garamond', Georgia, serif;

  /* Fließtext, Labels, Sublines — elegante Sans */
  --font-body: 'Jost', 'Optima', 'Gill Sans', system-ui, sans-serif;

  /* Persönlicher Code, technische Elemente */
  --font-mono: 'Courier Prime', 'Courier New', monospace;
}
```

> **Hinweis:** `Cormorant Garamond` und `Jost` sind Google Fonts — kostenlos, lizenzfrei, und treffen den Ritz-Ton sehr gut. Laden via `@import` in `index.css`.

### Größen

```css
:root {
  --text-drink-name:  clamp(1.75rem, 4vw, 2.5rem);  /* Drink-Titel, prominent */
  --text-headline:    clamp(1.25rem, 2.5vw, 1.75rem);
  --text-intro:       1.125rem;   /* Intro-Text Widget */
  --text-body:        1rem;       /* Fließtext, Story */
  --text-label:       0.875rem;   /* Slider-Labels */
  --text-subline:     0.8125rem;  /* Slider-Sublines, erklärende Texte */
  --text-disclaimer:  0.75rem;    /* Compliance-Texte, Hinweise */
  --text-code:        0.9375rem;  /* Persönlicher Code */
}
```

### Typografie-Regeln

- **Drink-Name:** `--font-display`, `--color-gold`, letter-spacing `0.06em`
- **Intro-Headline:** `--font-display`, `--color-text-primary`, normal weight
- **Labels & Body:** `--font-body`, `--color-text-secondary`
- **Kein bold auf Serif-Schriften** — wirkt plump; stattdessen Größe oder Farbe variieren
- **Großbuchstaben** nur für kurze Labels (max. 3 Wörter), letter-spacing `0.12em`

---

## 4. Button-Stile

```css
/* Primär-Button — z.B. "Rezeptkarte laden" */
.btn-primary {
  background:     var(--color-gold);
  color:          var(--color-ivory);
  border:         none;
  padding:        0.75rem 2rem;
  font-family:    var(--font-body);
  font-size:      var(--text-label);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor:         pointer;
  transition:     background var(--duration-hover) var(--ease-settle),
                  box-shadow var(--duration-hover) var(--ease-settle);
}
.btn-primary:hover {
  background:  var(--color-gold-dark);
  box-shadow:  0 4px 16px rgba(160, 120, 64, 0.25);
}

/* Sekundär-Button — z.B. "Neu komponieren" */
.btn-secondary {
  background:     transparent;
  color:          var(--color-text-secondary);
  border:         1px solid var(--color-border-fine);
  padding:        0.625rem 1.5rem;
  font-family:    var(--font-body);
  font-size:      var(--text-label);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor:         pointer;
  transition:     border-color var(--duration-hover) var(--ease-settle),
                  color var(--duration-hover) var(--ease-settle);
}
.btn-secondary:hover {
  border-color: var(--color-gold);
  color:        var(--color-gold);
}
```

**Regeln:**
- Kein `border-radius` > `2px` — eckig ist Ritz, rund ist App-Store
- Kein `font-weight: bold` auf Buttons
- Kein `box-shadow` im Ruhezustand — nur auf Hover

---

## 5. Slider-Stile

Der Slider hat exakt 3 Positionen (keine freie Skala). Er verhält sich wie ein segmentierter Schalter.

```css
/* Slider-Track */
.slider-track {
  background:    var(--color-border);
  height:        2px;             /* sehr fein — Ritz ist nicht laut */
  border-radius: 1px;
}

/* Aktive Spur (links vom Thumb) */
.slider-track-fill {
  background: var(--color-gold);
  transition: width var(--duration-reveal) var(--ease-settle);
}

/* Slider-Thumb */
.slider-thumb {
  width:            18px;
  height:           18px;
  background:       var(--color-gold);
  border:           2px solid var(--color-ivory);
  border-radius:    50%;
  box-shadow:       0 2px 8px rgba(160, 120, 64, 0.3);
  transition:       transform 200ms var(--ease-settle),
                    box-shadow 200ms var(--ease-settle);
}
/* Settle-Effekt beim Einrasten */
.slider-thumb.settling {
  transform: scale(0.92);
}

/* Positions-Labels unter dem Slider */
.slider-label {
  font-family:  var(--font-body);
  font-size:    var(--text-subline);
  color:        var(--color-text-muted);
  transition:   color var(--duration-hover) var(--ease-settle),
                opacity var(--duration-hover) var(--ease-settle);
}
.slider-label.active {
  color:       var(--color-text-primary);
  font-weight: 500;  /* leicht hervorgehoben, aber kein bold */
}
```

---

## 6. Karten-Stil (ResultCard & PDF)

```css
.result-card {
  background:    var(--color-bg-card);
  border:        1px solid var(--color-border);
  padding:       2.5rem 2rem;         /* großzügig — Ritz hat Luft */
  max-width:     560px;
  margin:        0 auto;

  /* Kein border-radius oder sehr minimal */
  border-radius: 2px;
}

/* Trennlinie — "zeichnet sich" beim Card-Reveal */
.card-divider {
  height:     1px;
  background: var(--color-border-fine);
  transform-origin: left center;
  transform:  scaleX(0);
  transition: transform 600ms var(--ease-settle);
}
.card-divider.revealed {
  transform: scaleX(1);
}

/* Persönlicher Code */
.personal-code {
  font-family:    var(--font-mono);
  font-size:      var(--text-code);
  letter-spacing: 0.2em;
  color:          var(--color-text-secondary);
  border:         1px solid var(--color-border);
  padding:        0.4rem 0.75rem;
  display:        inline-block;
}
```

**PDF-Karte** (`@react-pdf/renderer`):
- Hintergrundfarbe: `#FAF7F2` (Ivory)
- Schriften: Cormorant Garamond für Headline, Jost für Body (als TTF einbetten)
- Goldakzent: `#C9A96E`
- Kein Foto, keine Grafik — Eleganz durch Typografie und Weißraum

---

## 7. Animationsprinzipien

```css
:root {
  /* Das Ritz-Timing — nie linear, nie bouncy */
  --ease-settle:    cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* ease-out-quad */
  --ease-appear:    cubic-bezier(0.16, 1, 0.3, 1);          /* leicht verzögert, dann weich */

  --duration-hover:   200ms;  /* Hover-Feedback */
  --duration-reveal:  400ms;  /* Card-Reveal, Slider-Übergang */
  --duration-stagger: 80ms;   /* Versatz zwischen gestaffelten Elementen */
  --duration-code:    120ms;  /* Typewriter-Effekt, pro Zeichen */
  --duration-draw:    600ms;  /* Linie "zeichnet sich" */
  --duration-breathe: 6s;     /* Ornament-Atmen, sehr langsam */
}
```

### Inventar der erlaubten Animationen

| Element | Animation | Effekt |
|---------|-----------|--------|
| Slider-Thumb beim Einrasten | `scale(0.92) → scale(1)`, 200ms | taktiles Feedback |
| Slider-Label beim Wechsel | `opacity: 0 + translateY(-4px) → 1 + 0`, 250ms | Seiten-Umblättern |
| ResultCard-Reveal: Drink-Name | `opacity: 0 → 1`, 400ms | first |
| ResultCard-Reveal: Story | `opacity: 0 + translateY(8px) → 1 + 0`, 400ms, delay 80ms | gestaffelt |
| ResultCard-Reveal: Profil-Details | wie Story, delay 160ms | gestaffelt |
| Trennlinie | `scaleX(0) → scaleX(1)` von links, 600ms | Tinte auf Papier |
| Drink-Name letter-spacing | `0.06em → 0.12em` beim Reveal, 400ms | elegant expandierend |
| Persönlicher Code | Typewriter, 120ms/Zeichen | präzise, individuell |
| Ornament-Hintergrund | `opacity: 0.03 → 0.08`, 6s, loop | atmet, kaum wahrnehmbar |
| Button hover | Farbshift, 200ms | responsiv, nicht sprunghaft |

### Verbotene Animationen

| Verboten | Warum |
|----------|-------|
| `cubic-bezier` mit Overshoot (spring/bounce) | wirkt wie eine App, nicht wie Ritz |
| `scale > 1.05` auf beliebigem Element | aggressiv |
| `rotate` auf UI-Elementen | Spielhallen-Optik |
| Gleichzeitige Animationen auf >2 Elementen | unruhig |
| Konfetti, Partikel, Glitter | Casino |
| `animation-duration < 150ms` bei Reveals | zu hastig |

---

## 8. Do / Don't

### Farbe
| ✅ Do | ❌ Don't |
|-------|---------|
| Ivory, warme Erdtöne, Gold-Akzent | Reines Weiß `#FFFFFF` als Widget-Hintergrund |
| `--color-gold` für einen einzigen Akzent | Gold auf allem — wirkt billig |
| Weißraum großzügig einsetzen | Dichte Layouts mit vielen Farben |

### Typografie
| ✅ Do | ❌ Don't |
|-------|---------|
| Serif für Drink-Namen (Display) | Bold auf Serif-Schriften |
| Großbuchstaben mit viel Letter-Spacing | Alle-Caps-Fließtext |
| `clamp()` für responsive Größen | Fixe `px`-Werte für Headline |

### Sprache
| ✅ Do | ❌ Don't |
|-------|---------|
| „Ihr persönlicher Ritz Drink ist bereit" | „Dein Drink ist fertig! 🎉" |
| „komponiert für einen glanzvollen Auftakt" | „macht dich entspannter" |
| Historische Ritz-Atmosphäre als Subtext | Lebende Stars als scheinbare Testimonials |

### Animationen
| ✅ Do | ❌ Don't |
|-------|---------|
| Eine gut gesetzte Animation pro Interaktion | Viele gleichzeitige Effekte |
| `ease-out` Kurven | `linear` oder Bounce/Spring |
| Subtiles Ornament-Atmen (6s, opacity ~0.05) | Pulsierende, blinkende Elemente |

---

## 9. CSS-Custom-Properties — Vollständiges Snippet für `index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

:root {
  /* Farben */
  --color-ivory:          #FAF7F2;
  --color-ivory-warm:     #F5EFE4;
  --color-gold:           #C9A96E;
  --color-gold-light:     #E2C99A;
  --color-gold-dark:      #A07840;
  --color-text-primary:   #1A1714;
  --color-text-secondary: #6B5E52;
  --color-text-muted:     #A89880;
  --color-border:         #E8DDD0;
  --color-border-fine:    #D4C4B0;
  --color-bg-page:        #FFFFFF;
  --color-bg-widget:      #FAF7F2;
  --color-bg-card:        #F9F5EE;
  --color-disclaimer:     #8A7060;

  /* Schriften */
  --font-display: 'Cormorant Garamond', 'Garamond', Georgia, serif;
  --font-body:    'Jost', 'Optima', system-ui, sans-serif;
  --font-mono:    'Courier Prime', 'Courier New', monospace;

  /* Schriftgrößen */
  --text-drink-name:  clamp(1.75rem, 4vw, 2.5rem);
  --text-headline:    clamp(1.25rem, 2.5vw, 1.75rem);
  --text-intro:       1.125rem;
  --text-body:        1rem;
  --text-label:       0.875rem;
  --text-subline:     0.8125rem;
  --text-disclaimer:  0.75rem;
  --text-code:        0.9375rem;

  /* Animation */
  --ease-settle:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-appear:    cubic-bezier(0.16, 1, 0.3, 1);
  --duration-hover:   200ms;
  --duration-reveal:  400ms;
  --duration-stagger: 80ms;
  --duration-code:    120ms;
  --duration-draw:    600ms;
  --duration-breathe: 6s;
}
```

---

## Status

- [x] Farbpalette definiert (approximiert, Verifikation empfohlen bei Ritz-Brand-Team)
- [x] Typografie-System komplett
- [x] Button-Stile
- [x] Slider-Stile
- [x] Card-Stil
- [x] PDF-Stil-Hinweise
- [x] Animations-Inventar vollständig
- [x] Do/Don't-Katalog
- [x] CSS-Custom-Properties-Snippet
- [ ] Farben gegen echte Ritz-Website verifizieren (sobald CDP-Zugriff möglich)
