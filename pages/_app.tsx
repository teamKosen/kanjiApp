import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Header } from '../components/header/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
