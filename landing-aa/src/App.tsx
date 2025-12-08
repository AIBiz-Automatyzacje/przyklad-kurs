import { ModalProvider } from './context/ModalContext'
import { Navbar, Footer } from './components/layout'
import { ScrollProgress, CustomCursor } from './components/effects'
import { VideoModal } from './components/ui'
import { Hero } from './features/hero'
import { Problems } from './features/problems'
import { Examples } from './features/examples'
import { GettingStarted } from './features/getting-started'
import { Community } from './features/community'
import { HostingerModal } from './features/hostinger-modal'
import { NewsletterPopup } from './features/newsletter-popup'

function App() {
  return (
    <ModalProvider>
      {/* Effects */}
      <ScrollProgress />
      <CustomCursor />

      {/* Layout */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Problems />
        <Examples />
        <GettingStarted />
        <Community />
      </main>

      <Footer />

      {/* Modals */}
      <VideoModal />
      <HostingerModal />
      <NewsletterPopup />
    </ModalProvider>
  )
}

export default App
