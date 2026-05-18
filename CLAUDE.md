# Ritz Paris Cocktail Creator Widget

## Ticket-Workflow
1. Alle Tickets leben in GitHub Issues: github.com/curious93/ritz-paris-widget/issues
2. Vor jeder Session: `gh issue list --repo curious93/ritz-paris-widget` ausführen
3. Kein Ticket anfangen das nicht in GitHub Issues existiert
4. Commits referenzieren immer die Issue-Nummer: `feat: beschreibung (#N)`
5. Ticket schließen: `gh issue close <nr> --repo curious93/ritz-paris-widget`

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS v4
- Kein Backend, kein Auth

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS v4
- Kein Backend, kein Auth

## Dev
```bash
npm run dev   # http://localhost:5173
npm run lint  # ESLint inkl. JSDoc-Pflicht
```

## Dokumentations-Pflicht (wird durch ESLint erzwungen)

Jede exportierte Funktion, jeder Typ, jedes Interface braucht JSDoc.
`npm run lint` schlägt fehl wenn Dokumentation fehlt — kein Merge ohne grünes Lint.

**Pflicht-Tags für Funktionen:**
```ts
/**
 * Kurze Beschreibung was die Funktion tut.
 * Why-Kommentar wenn die Logik nicht offensichtlich ist.
 *
 * @param state - Die aktuellen Slider-Positionen [0-2, 0-2, 0-2, 0-2]
 * @returns DrinkResult mit Name, Story, Profil und Compliance-Flags
 * @example
 * const result = drinkEngine([2, 2, 2, 2]) // → Midnight Vendôme
 */
```

**Pflicht-Tags für Typen:**
```ts
/** Repräsentiert das Ergebnis der Drink-Engine nach Slider-Auswahl. */
export interface DrinkResult {
  /** Anzeigename des Drinks, z.B. "Midnight Vendôme" */
  name: string
}
```

**Why-Kommentare** für nicht-offensichtliche Logik:
```ts
// Alkoholfrei-Pfad darf keinen 18+-Disclaimer triggern (rechtliche Anforderung).
if (state[3] === 0) return null
```

**Nicht kommentieren:**
- Was der Code tut (steht im Code)
- Offensichtliche Logik
- Aufgaben-Referenzen ("added for issue #4")

## Design-Regel
`styles.md` muss vor jeder UI-Entscheidung konsultiert werden.
Keine hardcodierten Farbwerte — ausschließlich CSS-Custom-Properties aus `styles.md`.
