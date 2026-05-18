import { type Translations } from './types'

/** Traductions françaises. */
export const fr: Translations = {
  intro: {
    eyebrow:  'Bar Hemingway · Place Vendôme',
    headline: 'Composez votre soirée au Ritz.',
    subline:  "Une soirée à la Place Vendôme commence par un sentiment : un peu de lumière, un peu de musique, un soupçon d'histoire dans l'air. Choisissez le ton de votre soirée et recevez une recette de cocktail personnelle, inspirée par l'esprit du Ritz Paris.",
  },
  sliders: [
    {
      question: '🥃  Votre mode',
      positions: [
        { label: 'Sans alcool',    subline: "Une expérience complète sans alcool — thé, verjus, fruits et herbes dans des compositions précises." },
        { label: 'Léger',          subline: "Peu d'alcool, beaucoup de caractère — vermouth, champagne ou apéritif pour une soirée légère et élégante." },
        { label: 'Signature 18+',  subline: "L'expérience classique du bar — gin, cognac, calvados, rhum ou vodka comme fondation." },
      ],
    },
    {
      question: '🌙  Comment commence votre soirée ?',
      positions: [
        { label: 'Discret & privé',   subline: "Une boisson courte et tranquille pour une soirée qui commence dans le silence — peu de bulles, présence discrète." },
        { label: 'Élégant & ouvert',  subline: "Équilibré et accueillant — pour un début convivial avec une légère fraîcheur et une forme claire." },
        { label: 'Brillant & visible',subline: "Une longue boisson pétillante pour les moments qui méritent d'être remarqués — champagne, soda ou thé pétillant." },
      ],
    },
    {
      question: '🎩  Quelle attitude vous correspond ?',
      positions: [
        { label: 'Doux',          subline: "Doux, rond et accueillant — faible intensité, acidité douce, une boisson qui ne s'impose jamais." },
        { label: 'Précis',        subline: "Clairement structuré, sec et citrique — chaque élément a sa place définie." },
        { label: 'Caractériel',   subline: "Complexe et affirmé — amers, épices et une note de base marquée pour une boisson avec du caractère." },
      ],
    },
    {
      question: '🌿  Quelle aromatique vous attire ?',
      positions: [
        { label: 'Frais',         subline: "Lumineux et vivant — agrumes, pomme, menthe et concombre pour une aromatique claire et vivifiante." },
        { label: 'Floral',        subline: "Délicat et élégant — jasmin, rose, sureau et pêche avec une fine garniture florale." },
        { label: 'Mystérieux',    subline: "Sombre et chaud — orange, cacao, thé et épices pour une aromatique profonde et persistante." },
      ],
    },
  ],
  card: {
    eyebrow:    'Voilà',
    subeyebrow: 'Votre composition personnelle',
    basis:      'Base',
    aromatik:   'Aromatique',
    glas:       'Verre',
    garnitur:   'Garniture',
    pdfButton:  'Fiche recette',
    pdfLoading: 'Création…',
    disclaimer:   "Cette boisson contient de l'alcool. Consommez avec modération. Déconseillé aux personnes de moins de 18 ans.",
    seasonalNote: "La composition finale dépend de la saison et des disponibilités. L'équipe du bar du Ritz Paris affine chaque boisson sur place.",
  },
  quote: {
    text:        "« Quand je rêve de l'au-delà, l'action se passe toujours au bar du Ritz Paris. »",
    attribution: '— Ernest Hemingway',
    cta:         'Composez votre soirée',
    pending:     '—',
  },
  pdf: {
    byline: 'Bar Hemingway · Place Vendôme · Paris',
    footer: 'Ritz Paris — Votre composition personnelle',
  },
  langLabel: 'FR',
}
