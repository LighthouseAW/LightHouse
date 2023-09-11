import '@/styles/globals.css'
import { UserProvider } from '../context/UserContext'
import NavBar from '../components/NavBars/NavBar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}
