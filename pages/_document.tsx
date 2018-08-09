import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

// -------------------------------------------------------------
// Global styles.
// -------------------------------------------------------------

import '../styles/global/_manifest'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Meta = () => {
  return (
    <>
      <link rel="shortcut icon" href="/static/favicon.ico?v=0001" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cloudy Build</title>
    </>
  )
}

// -------------------------------------------------------------
// Document.
// -------------------------------------------------------------

export default class extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return {...page, styleTags}
  }

  render() {
    return (
      <html>
        <Head>
          <Meta />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
