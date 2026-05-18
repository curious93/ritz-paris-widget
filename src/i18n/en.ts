import { type Translations } from './types'

/** English translations. */
export const en: Translations = {
  intro: {
    eyebrow:  'Bar Hemingway · Place Vendôme',
    headline: 'Compose your Ritz evening.',
    subline:  'An evening at the Place Vendôme begins with a feeling: a little light, a little music, a hint of history in the air. Set the tone of your evening and receive a personal cocktail recipe, inspired by the spirit of Ritz Paris.',
  },
  sliders: [
    {
      question: '🥃  Your preference',
      positions: [
        { label: 'Non-alcoholic',  subline: 'A complete experience without alcohol — tea, verjus, fruit and herbs in precise compositions.' },
        { label: 'Light',          subline: 'Low alcohol, full character — vermouth, champagne or apéritif for a light, elegant evening.' },
        { label: 'Signature 18+',  subline: 'The classic bar experience — gin, cognac, calvados, rum or vodka as the foundation.' },
      ],
    },
    {
      question: '🌙  How does your evening begin?',
      positions: [
        { label: 'Still & private',   subline: 'A short, quiet drink for an evening that begins in stillness — low carbonation, discreet presence.' },
        { label: 'Elegant & open',    subline: 'Balanced and welcoming — for a convivial opening with gentle freshness and clear form.' },
        { label: 'Brilliant & seen',  subline: 'A long, sparkling drink for moments that deserve to be noticed — champagne, soda or sparkling tea.' },
      ],
    },
    {
      question: '🎩  Your character',
      positions: [
        { label: 'Gentle',       subline: 'Soft, round and inviting — low intensity, gentle acidity, a drink that never imposes.' },
        { label: 'Precise',      subline: 'Clearly structured, dry and citric — every element has its defined place.' },
        { label: 'Bold',         subline: 'Complex and assertive — bitters, spice and a strong base note for a drink with presence.' },
      ],
    },
    {
      question: '🌿  Your preferred aroma?',
      positions: [
        { label: 'Fresh',        subline: 'Bright and lively — citrus, apple, mint and cucumber for a clean, invigorating aromatic.' },
        { label: 'Floral',       subline: 'Delicate and elegant — jasmine, rose, elderflower and peach with a fine floral garnish.' },
        { label: 'Mysterious',   subline: 'Dark and warm — orange, cacao, tea and spice for a deep, lingering aromatic.' },
      ],
    },
  ],
  card: {
    eyebrow:    'Your personal composition',
    basis:      'Base',
    aromatik:   'Aromatics',
    glas:       'Glass',
    garnitur:   'Garnish',
    pdfButton:  'Recipe card',
    pdfLoading: 'Creating…',
    disclaimer:   'This drink contains alcohol. Please enjoy responsibly. Not suitable for persons under 18 years of age.',
    seasonalNote: 'The final composition depends on season and availability. The bar team at Ritz Paris refines each drink on site.',
  },
  quote: {
    text:        '"When I dream of afterlife, the action always takes place in the bar of the Ritz Paris."',
    attribution: '— Ernest Hemingway',
    cta:         'Compose your evening',
    pending:     '—',
  },
  pdf: {
    byline: 'Bar Hemingway · Place Vendôme · Paris',
    footer: 'Ritz Paris — Your personal composition',
  },
  langLabel: 'EN',
}
