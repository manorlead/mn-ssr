import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { Stores, StoresContext } from '../store'
import intl from 'react-intl-universal'
import { LOCALE } from '../helpers/locale.helper'
import Head from 'next/head'
require('../styles/globals.less')

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [intlDone, setIntlDone] = useState(false)

  useEffect(() => {
    if (router.locale) {
      setIntlDone(false)

      intl
        .init({
          currentLocale: router.locale,
          locales: LOCALE
        })
        .then(() => setIntlDone(true))
    }
  }, [router.locale])

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <StoresContext.Provider value={Stores}>
        {intlDone && <Component {...pageProps} />}
      </StoresContext.Provider>
    </>
  )
}
export default MyApp
