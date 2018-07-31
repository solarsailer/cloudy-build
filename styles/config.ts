// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const BRAND_COLOR = 'yellowgreen'
const TEXT_COLOR = '#111'
const BACKGROUND_COLOR = 'white'

// -------------------------------------------------------------
// Configuration.
// -------------------------------------------------------------

export const typography = {
  document: {
    fontStack: 'Verdana, sans-serif',
    fontSize: '1.5', // em
    lineHeight: '1.4'
  }
}

export const colors = {
  brand: BRAND_COLOR,
  selection: {
    foreground: 'white',
    background: BRAND_COLOR
  },
  page: {
    content: TEXT_COLOR,
    background: BACKGROUND_COLOR,
    overscroll: BACKGROUND_COLOR
  }
}
