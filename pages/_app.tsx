
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/header.scss';
import '../styles/services.scss';
import '../styles/destinations.scss';
import '../styles/booking.scss';
import '../styles/subscription.scss';
import '../styles/footer.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
