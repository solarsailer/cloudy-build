import {css} from 'styled-components'
import {lighten, darken} from 'polished'

import {colors} from '../config'

// -------------------------------------------------------------
// Site global styles.
// -------------------------------------------------------------

const RESET = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  ul,
  ol,
  dl {
    margin: initial;
  }

  ol,
  ul {
    list-style: none;
    padding-left: initial;
  }
`

const BASIC_LINK = css`
  a {
    color: ${colors.brand};
    border-bottom: 1px dotted currentColor;

    text-decoration: none;
  }

  a:hover {
    color: ${lighten(0.05, colors.brand)};
    border-bottom-style: solid;
  }

  a:active,
  a:focus {
    color: ${darken(0.1, colors.brand)};
  }
`

export default css`
  ${RESET};
  ${BASIC_LINK};
`
