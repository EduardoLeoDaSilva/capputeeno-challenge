import { Header, Logo } from '@/styles/layout'
import { GlobalStyle } from '../styles/GlobalStyle'
import { defaultTheme } from '../styles/themes/defaultTheme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (<>

    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  </>
  )
}
