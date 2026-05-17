import 'nextra-theme-docs/style.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
