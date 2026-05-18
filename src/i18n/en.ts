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
      question: 'Your preference',
      positions: [
        { label: 'Non-alcoholic',  subline: 'Tea, verjus, fruit, herbs, sparkling tea' },
        { label: 'Light',          subline: 'Low-ABV — vermouth, apéritif, champagne' },
        { label: 'Signature 18+',  subline: 'Gin, cognac, calvados, rum or vodka' },
      ],
    },
    {
      question: 'How does your evening begin?',
      positions: [
        { label: 'Still & private',   subline: 'Short, quiet drink — low carbonation, discreet presence' },
        { label: 'Elegant & open',    subline: 'Balanced, light freshness — for a convivial opening' },
        { label: 'Brilliant & seen',  subline: 'Longer, sparkling drink — champagne or soda, full presence' },
      ],
    },
    {
      question: 'Your character',
      positions: [
        { label: 'Gentle',       subline: 'Soft acidity, round sweetness, lower intensity' },
        { label: 'Precise',      subline: 'Clear structure, dry, citric, defined balance' },
        { label: 'Bold',         subline: 'More depth, bitters, spice, stronger base note' },
      ],
    },
    {
      question: 'Your preferred aroma?',
      positions: [
        { label: 'Fresh',        subline: 'Citrus, apple, mint, cucumber — bright, clean aromatics' },
        { label: 'Floral',       subline: 'Jasmine, rose, elderflower, peach — elegant garnish' },
        { label: 'Mysterious',   subline: 'Orange, cacao, tea, spice — dark, warm aromatics' },
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
    disclaimer: 'This drink contains alcohol. Please enjoy responsibly. Not suitable for persons under 18 years of age.',
  },
  pdf: {
    byline: 'Bar Hemingway · Place Vendôme · Paris',
    footer: 'Ritz Paris — Your personal composition',
  },
  langLabel: 'EN',
}
