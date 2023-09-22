import '../styles/globals.css'
import { UserProvider } from '../context/UserContext'
import NavBar from '../components/NavBars/NavBar'
import Footer from '../components/Footer'
import { Montserrat } from 'next/font/google'
import { ActiveLinkProvider } from '../context/ActiveLinkContext'

const font = Montserrat({ weight: '500', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <ActiveLinkProvider>
      <UserProvider>
        <div className={font.className}>
          <NavBar />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </UserProvider>
    </ActiveLinkProvider>
  );
}
