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

## Dev
```bash
npm run dev   # http://localhost:5173
```
