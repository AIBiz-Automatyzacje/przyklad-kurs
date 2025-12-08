export interface NavLink {
  id: string
  label: string
  href: string
}

export interface Problem {
  id: number
  title: string
  description: string
  icon: string
}

export interface Example {
  id: number
  title: string
  description: string
  image: string
  videoUrl: string
  comparison: {
    manual: string[]
    automated: string[]
  }
}

export type ModalType = 'video' | 'hostinger' | 'newsletter' | null

export interface ModalContextType {
  activeModal: ModalType
  videoUrl: string | null
  openVideoModal: (url: string) => void
  openHostingerModal: () => void
  openNewsletterModal: () => void
  closeModal: () => void
}
