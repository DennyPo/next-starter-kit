import Head from "next/head";
import wrapper from "../store/index";

import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Next Starter</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(App)
