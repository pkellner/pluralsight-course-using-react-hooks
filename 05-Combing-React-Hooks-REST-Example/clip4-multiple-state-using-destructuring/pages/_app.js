import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/static/site.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
