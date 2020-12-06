import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../public/styles/index.css'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
