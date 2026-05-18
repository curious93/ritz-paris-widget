/**
 * Embed-Einstiegspunkt für CMS-Integration (Scrivito, etc.).
 *
 * Verwendung im CMS:
 * ```html
 * <div id="ritz-widget"></div>
 * <link rel="stylesheet" href="ritz-widget.css" />
 * <script src="ritz-widget.js"></script>
 * ```
 *
 * Das Script mountet sich automatisch in #ritz-widget.
 * Falls kein #ritz-widget existiert, passiert nichts.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('ritz-widget')
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
