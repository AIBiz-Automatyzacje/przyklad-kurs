import { Play } from '@phosphor-icons/react'
import { useModal } from '../../../context/ModalContext'

interface VideoPlayerProps {
  thumbnailSrc: string
  videoUrl: string
  title: string
}

export function VideoPlayer({ thumbnailSrc, videoUrl, title }: VideoPlayerProps) {
  const { openVideoModal } = useModal()

  return (
    <button
      onClick={() => openVideoModal(videoUrl)}
      className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer"
      aria-label={`Odtwórz wideo: ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailSrc}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-transform duration-300 group-hover:scale-110">
          <Play size={32} weight="fill" className="text-white ml-1" />
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300" />
    </button>
  )
}
