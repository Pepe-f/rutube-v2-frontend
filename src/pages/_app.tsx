import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import ReduxToastrLib from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/store/store'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgressBar
        color='#FF7652'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
          <ReduxToastrLib
            newestOnTop={false}
            preventDuplicates
            progressBar
            closeOnToastrClick
            timeOut={400}
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
        </PersistGate>
      </Provider>
    </>
  )
}
