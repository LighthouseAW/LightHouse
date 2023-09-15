import './styles/globals.css'
import { UserProvider } from '../context/UserContext'
import NavBar from '../components/NavBars/NavBar'
import Footer from '../components/Footer'
import { Montserrat } from 'next/font/google'

const font = Montserrat({ weight: '500', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <main className={font.className}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </UserProvider>
  );
}
