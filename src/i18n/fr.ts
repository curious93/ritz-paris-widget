import { type Translations } from './types'

/** Traductions françaises. */
export const fr: Translations = {
  intro: {
    eyebrow:  'Bar Hemingway · Place Vendôme',
    headline: 'Composez votre soirée au Ritz.',
    subline:  "Une soirée à la Place Vendôme commence par un sentiment : un peu de lumière, un peu de musique, un soupçon d’histoire dans l’air. Choisissez le ton de votre soirée et recevez une recette de cocktail personnelle, inspirée par l’esprit du Ritz Paris.",
  },
  sliders: [
    {
      question: '🥃  Votre mode',
      positions: [
        { label: 'Sans alcool',    subline: 'Thé, verjus, fruits, herbes, thé pétillant' },
        { label: 'Léger',          subline: 'Low-ABV — vermouth, apéritif, champagne' },
        { label: 'Signature 18+',  subline: 'Gin, cognac, calvados, rhum ou vodka' },
      ],
    },
    {
      question: '🌙  Comment commence votre soirée ?',
      positions: [
        { label: 'Discret & privé',   subline: 'Boisson courte et tranquille — peu de bulles, présence discrète' },
        { label: 'Élégant & ouvert',  subline: 'Équilibré, légère fraîcheur — pour un début convivial' },
        { label: 'Brillant & visible',subline: 'Boisson longue et pétillante — champagne ou soda, pleine présence' },
      ],
    },
    {
      question: '🎩  Quelle attitude vous correspond ?',
      positions: [
        { label: 'Doux',          subline: 'Acidité douce, douceur ronde, intensité modérée' },
        { label: 'Précis',        subline: 'Structure claire, sec, citrique, équilibre défini' },
        { label: 'Caractériel',   subline: 'Plus de profondeur, amers, épices, note de base marquée' },
      ],
    },
    {
      question: '🌿  Quelle aromatique vous attire ?',
      positions: [
        { label: 'Frais',         subline: 'Agrumes, pomme, menthe, concombre — aromatique claire' },
        { label: 'Floral',        subline: 'Jasmin, rose, sureau, pêche — garniture élégante' },
        { label: 'Mystérieux',    subline: 'Orange, cacao, thé, épices — aromatique sombre et chaude' },
      ],
    },
  ],
  card: {
    eyebrow:    'Votre composition personnelle',
    basis:      'Base',
    aromatik:   'Aromatique',
    glas:       'Verre',
    garnitur:   'Garniture',
    pdfButton:  'Fiche recette',
    pdfLoading: 'Création…',
    disclaimer: "Cette boisson contient de l'alcool. Consommez avec modération. Déconseillé aux personnes de moins de 18 ans.",
  },
  pdf: {
    byline: 'Bar Hemingway · Place Vendôme · Paris',
    footer: 'Ritz Paris — Votre composition personnelle',
  },
  langLabel: 'FR',
}
