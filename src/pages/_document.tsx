
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ButtonBadge, CardButton, Header, Logo } from '../styles/layout'
import { ShoppingCart } from 'phosphor-react'

export function htmlString(): string {



  return (`${<Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Saira+Stencil+One&display=swap" rel="stylesheet" />
    </Head>
    <body>
      <Header>

      </Header>
      <Main />
      <NextScript />
    </body>
  </Html>
    }`
  )
}


export default class MyDocument extends Document {


  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    


      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
            enhanceComponent: (Component) => Component,
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }


  }

  
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Saira+Stencil+One&family=Saira:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }



}