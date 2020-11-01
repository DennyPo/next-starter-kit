import { Provider } from 'react-redux'
import Head from "next/head";

import store from "../store/index";

import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Next Starter</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )

}

export default App
