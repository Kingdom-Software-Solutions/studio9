import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page'
import '../styles/globals.css';
// TODO: swap with my own css to customize progress bar
import 'nprogress/nprogress.css';
// import '../components/styles/nprogress.css';

// Sets progress bar in app
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  // wrap the app in top level component Page
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default MyApp
