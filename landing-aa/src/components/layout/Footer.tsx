import {
  YoutubeLogo,
  XLogo,
  TiktokLogo,
  FacebookLogo,
  Globe,
  Envelope,
} from '@phosphor-icons/react'
import { Container } from './Container'
import { SOCIAL_LINKS, CONTACT } from '../../lib/constants'

const socialLinks = [
  { href: SOCIAL_LINKS.website, icon: Globe, label: 'Strona główna' },
  { href: SOCIAL_LINKS.youtube, icon: YoutubeLogo, label: 'YouTube' },
  { href: SOCIAL_LINKS.twitter, icon: XLogo, label: 'X (Twitter)' },
  { href: SOCIAL_LINKS.tiktok, icon: TiktokLogo, label: 'TikTok' },
]

const facebookGroups = [
  { href: SOCIAL_LINKS.facebookAA, label: 'Akademia Automatyzacji' },
  { href: SOCIAL_LINKS.facebookN8n, label: 'n8n Polska' },
]

export function Footer() {
  return (
    <footer className="relative bg-bg-dark border-t border-white/5">
      {/* Gradient line */}
      <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                <span className="text-accent">Akademia</span>Automatyzacji
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Uczymy, jak wykorzystać automatyzacje i AI, aby przyśpieszać
                procesy i oszczędzać czas.
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Envelope size={16} />
                {CONTACT.email}
              </a>
            </div>

            {/* Facebook Groups */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                Grupy Facebook
              </h3>
              <ul className="space-y-3">
                {facebookGroups.map((group) => (
                  <li key={group.label}>
                    <a
                      href={group.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-light transition-colors"
                    >
                      <FacebookLogo size={16} className="text-accent" />
                      {group.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                Social Media
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 rounded-lg bg-white/5 text-text-muted hover:text-accent hover:bg-white/10 transition-colors"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <div className="flex justify-center gap-6 mb-4">
              <a
                href="https://app.easy.tools/policies/polityka-prywatnosci-73?lang=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                Polityka prywatności
              </a>
              <a
                href="https://app.easy.tools/terms/polityka-prywatnosci-73?lang=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                Regulamin
              </a>
            </div>
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} Akademia Automatyzacji. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
