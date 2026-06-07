import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import { type DrinkResult, type SliderState } from '../types/drink'
import { type Translations } from '../i18n/types'
import { generateCode } from '../engine/codeGenerator'

Font.register({
  family: 'CormorantGaramond',
  fonts: [
    { src: new URL('../assets/fonts/CormorantGaramond-Regular.ttf', import.meta.url).href, fontWeight: 400 },
    { src: new URL('../assets/fonts/CormorantGaramond-Italic.ttf', import.meta.url).href, fontWeight: 400, fontStyle: 'italic' },
  ],
})

Font.register({
  family: 'Jost',
  fonts: [
    { src: new URL('../assets/fonts/Jost-Regular.ttf', import.meta.url).href, fontWeight: 400 },
    { src: new URL('../assets/fonts/Jost-Medium.ttf', import.meta.url).href, fontWeight: 500 },
  ],
})

// ─── Ritz-Designtokens für PDF (keine CSS-Custom-Properties in react-pdf) ──
const C = {
  ivory:     '#FAF7F2',
  gold:      '#C9A96E',
  goldLight: '#E2C99A',
  textPrim:  '#1A1714',
  textSec:   '#6B5E52',
  textMuted: '#A89880',
  border:    '#E8DDD0',
  borderFine:'#D4C4B0',
  disclaimer:'#8A7060',
} as const

const styles = StyleSheet.create({
  page: {
    backgroundColor: C.ivory,
    padding: 48,
    fontFamily: 'Jost',
  },
  eyebrow: {
    fontSize: 7,
    letterSpacing: 2.5,
    color: C.textMuted,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 4,
  },
  eyebrowVoila: {
    fontSize: 7,
    letterSpacing: 2.5,
    color: C.textMuted,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontFamily: 'CormorantGaramond',
    fontSize: 28,
    color: C.gold,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 6,
  },
  dividerCenter: {
    height: 0.75,
    backgroundColor: C.gold,
    width: 40,
    alignSelf: 'center',
    marginBottom: 14,
    opacity: 0.6,
  },
  story: {
    fontFamily: 'CormorantGaramond',
    fontStyle: 'italic',
    fontSize: 11,
    color: C.textSec,
    textAlign: 'center',
    lineHeight: 1.65,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  dividerFull: {
    height: 0.5,
    backgroundColor: C.borderFine,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  detailLabel: {
    fontSize: 7,
    letterSpacing: 1.5,
    color: C.textMuted,
    textTransform: 'uppercase',
    width: 72,
    paddingTop: 1,
  },
  detailValue: {
    fontSize: 9.5,
    color: C.textPrim,
    flex: 1,
  },
  footerDivider: {
    height: 0.5,
    backgroundColor: C.borderFine,
    marginBottom: 12,
    marginTop: 8,
  },
  codeLine: {
    fontSize: 7.5,
    color: C.textSec,
    letterSpacing: 1,
    marginBottom: 10,
  },
  codeValue: {
    letterSpacing: 2,
    fontFamily: 'Courier',
  },
  seasonal: {
    fontSize: 7.5,
    color: C.textMuted,
    lineHeight: 1.55,
    marginBottom: 8,
  },
  disclaimer: {
    fontSize: 7,
    color: C.disclaimer,
    lineHeight: 1.5,
    borderLeftWidth: 1.5,
    borderLeftColor: C.borderFine,
    paddingLeft: 7,
    marginTop: 4,
  },
  ritzLine: {
    fontSize: 7,
    letterSpacing: 1.8,
    color: C.goldLight,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 24,
  },
})

/** Props für die PDF-Rezeptkarte. */
interface PdfCardProps {
  /** Der Drink dessen Rezept als PDF gerendert wird */
  drink: DrinkResult
  /** SliderState für Code-Generierung */
  state: SliderState
  /** Lokalisierte Texte */
  t: Translations['card']
  /** PDF-Byline und Footer */
  pdf: Translations['pdf']
}

/**
 * React-PDF-Dokument für die Ritz-Rezeptkarte.
 *
 * @param props - Komponenten-Props
 * @param props.drink - DrinkResult mit allen Feldern
 * @param props.state - SliderState für persönlichen Code
 * @param props.t - Lokalisierte Card-Texte
 * @param props.pdf - Lokalisierte PDF-Texte
 * @returns Ein react-pdf Document
 */
export function PdfCard({ drink, state, t, pdf }: PdfCardProps) {
  const code = generateCode(state)

  return (
    <Document title={`Ritz Paris — ${drink.name}`} author="Bar Hemingway · Ritz Paris">
      <Page size="A5" style={styles.page}>

        <Text style={styles.eyebrow}>{pdf.byline}</Text>
        <Text style={styles.eyebrowVoila}>{t.eyebrow}  {t.subeyebrow}</Text>
        <Text style={styles.name}>{drink.name}</Text>
        <View style={styles.dividerCenter} />
        <Text style={styles.story}>{drink.story}</Text>

        <View style={styles.dividerFull} />

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>{t.basis}</Text>
          <Text style={styles.detailValue}>{drink.base}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>{t.aromatik}</Text>
          <Text style={styles.detailValue}>{drink.accents.join(' · ')}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>{t.glas}</Text>
          <Text style={styles.detailValue}>{drink.glass}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>{t.garnitur}</Text>
          <Text style={styles.detailValue}>{drink.garnish}</Text>
        </View>

        <View style={styles.footerDivider} />

        <Text style={styles.codeLine}>
          {t.codeLabel}{'  '}<Text style={styles.codeValue}>{code}</Text>
        </Text>

        <Text style={styles.seasonal}>{t.seasonalNote}</Text>

        {drink.abvLevel === 'full' && (
          <Text style={styles.disclaimer}>{t.disclaimer}</Text>
        )}

        <Text style={styles.ritzLine}>{pdf.footer}</Text>

      </Page>
    </Document>
  )
}
