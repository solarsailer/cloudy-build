// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const BRAND_COLOR = 'rgb(186, 83, 221)'
const TEXT_COLOR = 'rgb(10, 10, 10)'
const BACKGROUND_COLOR = 'rgb(42, 42, 42)'

// -------------------------------------------------------------
// Configuration.
// -------------------------------------------------------------

export const typography = {
  document: {
    fontStack:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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

export const spaces = {
  margin: '2rem'
}
