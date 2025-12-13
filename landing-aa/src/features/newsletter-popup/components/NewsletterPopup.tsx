import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, PaperPlaneTilt, CheckCircle, XCircle } from '@phosphor-icons/react'
import { Button, Input } from '../../../components/ui'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem('newsletter_popup_shown')
    if (alreadyShown) return

    const handleScroll = () => {
      const examplesSection = document.getElementById('examples')
      if (!examplesSection) return

      const rect = examplesSection.getBoundingClientRect()
      const sectionHeight = examplesSection.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how much of the section has been scrolled
      const scrolledPast = viewportHeight - rect.top
      const scrollPercentage = (scrolledPast / sectionHeight) * 100

      // Show popup at 60% scroll of examples section
      if (scrollPercentage >= 60 && !isVisible) {
        setIsVisible(true)
        sessionStorage.setItem('newsletter_popup_shown', 'true')
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'newsletter-popup',
          timestamp: new Date().toISOString(),
          honeypot,
        }),
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      setStatus('success')
      setTimeout(() => setIsVisible(false), 3000)
    } catch {
      setStatus('error')
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Centered Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden">
                {/* Background orbs */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 p-1.5 text-text-muted hover:text-text-light rounded-full hover:bg-white/5 transition-colors"
                  aria-label="Zamknij"
                >
                  <X size={18} />
                </button>

                <div className="relative">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Chcesz więcej?
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted mb-4">
                    Więcej scenariuszy, poradników i materiałów o automatyzacji n8n –
                    prosto na Twojego maila.
                  </p>

                  {/* Form or status */}
                  {status === 'success' ? (
                    <div className="flex items-center gap-3 p-4 bg-success/10 rounded-xl border border-success/20">
                      <CheckCircle size={24} className="text-success" />
                      <span className="text-sm text-success">
                        Dzięki! Sprawdź swoją skrzynkę.
                      </span>
                    </div>
                  ) : status === 'error' ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-4 bg-error/10 rounded-xl border border-error/20">
                        <XCircle size={24} className="text-error" />
                        <span className="text-sm text-error">
                          Ups, coś poszło nie tak. Spróbuj ponownie.
                        </span>
                      </div>
                      <Button onClick={() => setStatus('idle')} variant="outline" size="sm">
                        Spróbuj ponownie
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Honeypot field - ukryty, boty go wypełniają */}
                      <input
                        type="text"
                        name="honeypot"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        className="absolute -left-[9999px]"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                      <Input
                        type="email"
                        placeholder="Twój adres email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'loading'}
                      />
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          'Wysyłanie...'
                        ) : (
                          <>
                            Dołącz
                            <PaperPlaneTilt size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  )}

                  {/* Note */}
                  {status === 'idle' && (
                    <p className="mt-3 text-xs text-text-muted text-center">
                      Zero spamu. Tylko wartościowe materiały.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
