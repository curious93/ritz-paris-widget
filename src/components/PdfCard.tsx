import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { type DrinkResult, type SliderState } from '../types/drink'
import { generateCode } from '../engine/codeGenerator'

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
    fontFamily: 'Helvetica',
  },
  eyebrow: {
    fontSize: 7,
    letterSpacing: 2.5,
    color: C.textMuted,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 8,
  },
  name: {
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
    fontSize: 9.5,
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
  profileRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 14,
    marginBottom: 16,
  },
  tag: {
    fontSize: 7,
    letterSpacing: 1.2,
    color: C.textSec,
    textTransform: 'uppercase',
    borderWidth: 0.5,
    borderColor: C.border,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  footerDivider: {
    height: 0.5,
    backgroundColor: C.borderFine,
    marginBottom: 12,
  },
  codeBox: {
    borderWidth: 0.5,
    borderColor: C.border,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 10,
  },
  codeText: {
    fontSize: 9,
    letterSpacing: 3,
    color: C.textSec,
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
}

/**
 * React-PDF-Dokument für die Ritz-Rezeptkarte.
 * Wird via PDFDownloadLink oder pdf().toBlob() gerendert.
 *
 * @param props - Komponenten-Props
 * @param props.drink - DrinkResult mit allen Feldern
 * @param props.state - SliderState für persönlichen Code
 * @returns Ein react-pdf Document
 */
export function PdfCard({ drink, state }: PdfCardProps) {
  const code = generateCode(state)

  return (
    <Document title={`Ritz Paris — ${drink.name}`} author="Bar Hemingway · Ritz Paris">
      <Page size="A5" style={styles.page}>

        <Text style={styles.eyebrow}>Bar Hemingway · Place Vendôme · Paris</Text>
        <Text style={styles.name}>{drink.name}</Text>
        <View style={styles.dividerCenter} />
        <Text style={styles.story}>{drink.story}</Text>

        <View style={styles.dividerFull} />

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Basis</Text>
          <Text style={styles.detailValue}>{drink.base}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Aromatik</Text>
          <Text style={styles.detailValue}>{drink.accents.join(' · ')}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Glas</Text>
          <Text style={styles.detailValue}>{drink.glass}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Garnitur</Text>
          <Text style={styles.detailValue}>{drink.garnish}</Text>
        </View>

        <View style={styles.profileRow}>
          {drink.profile.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text>{tag.toUpperCase()}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footerDivider} />

        <View style={styles.codeBox}>
          <Text style={styles.codeText}>{code}</Text>
        </View>

        <Text style={styles.seasonal}>{drink.seasonalNote}</Text>

        {drink.abvLevel === 'full' && (
          <Text style={styles.disclaimer}>
            Dieser Drink enthält Alkohol. Genuss in Maßen — bitte trinken Sie verantwortungsvoll. Nicht geeignet für Personen unter 18 Jahren.
          </Text>
        )}

        <Text style={styles.ritzLine}>Ritz Paris — Votre composition personnelle</Text>

      </Page>
    </Document>
  )
}

