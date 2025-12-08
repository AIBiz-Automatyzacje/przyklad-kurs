import { Modal } from './Modal'
import { useModal } from '../../context/ModalContext'

function getVimeoEmbedUrl(url: string): string {
  // Handle different Vimeo URL formats
  // Format: vimeo.com/VIDEO_ID or vimeo.com/VIDEO_ID/PRIVATE_HASH
  const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?/
  const match = url.match(vimeoRegex)

  if (match && match[1]) {
    const videoId = match[1]
    const privateHash = match[2]

    // Build embed URL with private hash if present
    let embedUrl = `https://player.vimeo.com/video/${videoId}`
    if (privateHash) {
      embedUrl += `?h=${privateHash}&autoplay=1&title=0&byline=0&portrait=0`
    } else {
      embedUrl += `?autoplay=1&title=0&byline=0&portrait=0`
    }
    return embedUrl
  }

  // If already an embed URL, just add autoplay
  if (url.includes('player.vimeo.com')) {
    return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`
  }

  return url
}

export function VideoModal() {
  const { activeModal, videoUrl, closeModal } = useModal()

  if (!videoUrl) return null

  return (
    <Modal
      isOpen={activeModal === 'video'}
      onClose={closeModal}
      className="w-[95vw] max-w-5xl aspect-video p-0"
      showCloseButton={true}
    >
      <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
        <iframe
          src={getVimeoEmbedUrl(videoUrl)}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      </div>
    </Modal>
  )
}
