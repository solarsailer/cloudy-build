import App from 'next/app'
import React from 'react'

import Page from '../components/Page'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'

// -------------------------------------------------------------
// App.
// -------------------------------------------------------------

export default class extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Page>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </Page>
    )
  }
}
