import { Header, Logo } from '@/styles/layout'
import { GlobalStyle } from '../styles/GlobalStyle'
import { defaultTheme } from '../styles/themes/defaultTheme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '@/components/layout'
import { OrderContextProvider } from '@/contexts/OrderContext'

export default function App({ Component, pageProps }: AppProps) {
  return (<>

    <ThemeProvider theme={defaultTheme}>
      <OrderContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OrderContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </>
  )
}
