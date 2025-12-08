import { useState } from 'react'
import { Copy, Check, ArrowRight, Tag } from '@phosphor-icons/react'
import { Modal } from '../../../components/ui'
import { useModal } from '../../../context/ModalContext'
import { HOSTINGER } from '../../../lib/constants'

export function HostingerModal() {
  const { activeModal, closeModal } = useModal()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(HOSTINGER.couponCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Modal
      isOpen={activeModal === 'hostinger'}
      onClose={closeModal}
      className="w-[90vw] max-w-md p-8"
    >
      <div className="text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
          <Tag size={32} className="text-accent" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Masz kod rabatowy!</h2>

        {/* Description */}
        <p className="text-text-muted mb-6">
          Użyj poniższego kodu przy zakupie VPS na Hostinger i otrzymaj{' '}
          <span className="text-accent font-semibold">{HOSTINGER.discount}</span>{' '}
          zniżki
        </p>

        {/* Coupon code */}
        <div className="relative mb-6">
          <div className="flex items-center gap-2 p-4 bg-bg-dark rounded-xl border-2 border-dashed border-accent/50">
            <code className="flex-1 text-lg font-mono font-bold text-accent tracking-wider">
              {HOSTINGER.couponCode}
            </code>
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Kopiuj kod"
            >
              {copied ? (
                <Check size={20} className="text-success" />
              ) : (
                <Copy size={20} className="text-text-muted" />
              )}
            </button>
          </div>
          {copied && (
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-success">
              Skopiowano!
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={HOSTINGER.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeModal}
          className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-br from-accent to-accent-hover text-white rounded-full font-semibold text-lg shadow-[0_4px_20px_rgba(255,107,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,107,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Przejdź do Hostinger
          <ArrowRight size={20} />
        </a>

        {/* Note */}
        <p className="mt-4 text-xs text-text-muted">
          Link afiliacyjny. Zniżka działa tylko przez ten link.
        </p>
      </div>
    </Modal>
  )
}
