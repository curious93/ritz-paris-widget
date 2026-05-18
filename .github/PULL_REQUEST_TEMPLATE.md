## Was ändert sich?

<!-- Eine Zeile: Was wurde gebaut / geändert / gefixt? Referenz: closes #N -->

## Checkliste

### Code-Qualität
- [ ] `npm run lint` schlägt nicht fehl
- [ ] Alle **neuen** exportierten Funktionen haben JSDoc (`@param`, `@returns`, `@example`)
- [ ] Alle **neuen** TypeScript-Typen und Interfaces haben JSDoc
- [ ] Nicht-offensichtliche Logik hat einen Why-Kommentar (nicht "was", sondern "warum")

### Design
- [ ] `styles.md` wurde vor UI-Entscheidungen konsultiert
- [ ] CSS-Custom-Properties aus `styles.md` werden verwendet (keine hardcodierten Farbwerte)
- [ ] Animationen folgen den Prinzipien aus `styles.md` (subtil, kein Bounce/Overshoot)

### Funktional
- [ ] Responsiv getestet: 375px (Mobile) und 1280px (Desktop)
- [ ] Alkoholfrei-Pfad (Regler 4 = 0): kein 18+-Disclaimer sichtbar
- [ ] Signature-Pfad (Regler 4 = 2): Responsible-Drinking-Hinweis sichtbar (falls relevant)

### Ticket
- [ ] GitHub Issue referenziert (`closes #N` im PR-Titel oder hier oben)
- [ ] Issue wird nach Merge geschlossen
