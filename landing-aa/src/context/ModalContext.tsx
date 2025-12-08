import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { ModalType, ModalContextType } from '../types'

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const openVideoModal = useCallback((url: string) => {
    setVideoUrl(url)
    setActiveModal('video')
  }, [])

  const openHostingerModal = useCallback(() => {
    setActiveModal('hostinger')
  }, [])

  const openNewsletterModal = useCallback(() => {
    setActiveModal('newsletter')
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
    setVideoUrl(null)
  }, [])

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        videoUrl,
        openVideoModal,
        openHostingerModal,
        openNewsletterModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
