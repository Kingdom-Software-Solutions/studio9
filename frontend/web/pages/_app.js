import NProgress from 'nprogress';
import Router from 'next/router';
import '../styles/globals.css';
// TODO: swap with my own css to customize progress bar
import 'nprogress/nprogress.css';
// import '../components/styles/nprogress.css';

// Sets progress bar in app
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
