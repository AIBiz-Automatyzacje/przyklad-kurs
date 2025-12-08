// === NAVIGATION ===
export const NAV_LINKS = [
  { id: 'problems', label: 'Problemy', href: '#problems' },
  { id: 'examples', label: 'Przykłady', href: '#examples' },
  { id: 'getting-started', label: 'Jak zacząć', href: '#getting-started' },
  { id: 'community', label: 'Darmowe materiały', href: '#community' },
] as const

// === SOCIAL LINKS ===
export const SOCIAL_LINKS = {
  website: 'https://akademiaautomatyzacji.com/',
  youtube: 'https://www.youtube.com/@AkademiaAutomatyzacji',
  twitter: 'https://x.com/KacperTrzepiec1',
  tiktok: 'https://www.tiktok.com/@akademiaautomatyzacji',
  facebookAA: 'https://www.facebook.com/groups/887930655685138/',
  facebookN8n: 'https://www.facebook.com/groups/1862334801191952/',
  skool: 'https://www.skool.com/strefa-akademii-automatyzacji-6594',
} as const

// === HOSTINGER ===
export const HOSTINGER = {
  url: 'https://www.hostinger.com/akademiaautomatyzacji',
  couponCode: 'AKADEMIAAUTOMATYZACJI',
  discount: '10%',
} as const

// === CONTACT ===
export const CONTACT = {
  email: 'kontakt@akademiaautomatyzacji.com',
} as const

// === VIDEOS ===
export const VIDEOS = {
  adsAnalysis: 'https://vimeo.com/1144321926',
  fbLeads: 'https://vimeo.com/1144321917',
  installation: 'https://vimeo.com/1135837249/6d47d40218',
} as const

// === PROBLEMS DATA ===
export const PROBLEMS = [
  {
    id: 1,
    title: 'Kopiujecie dane między aplikacjami?',
    description: 'Ręczne przenoszenie informacji z jednego narzędzia do drugiego to strata czasu i ryzyko błędów.',
    icon: 'Copy',
  },
  {
    id: 2,
    title: 'Ręcznie sprawdzacie, co robi konkurencja?',
    description: 'Monitorowanie reklam i działań konkurencji pochłania godziny, które mogłyby być lepiej wykorzystane.',
    icon: 'MagnifyingGlass',
  },
  {
    id: 3,
    title: 'Tracicie godziny na zadania, które powtarzacie co tydzień?',
    description: 'Rutynowe czynności, które wykonujecie regularnie, można zautomatyzować raz i zapomnieć.',
    icon: 'Clock',
  },
  {
    id: 4,
    title: 'Płacicie za narzędzia, których nie wykorzystujecie w pełni?',
    description: 'Wiele aplikacji oferuje API i integracje, ale bez automatyzacji ich potencjał pozostaje niewykorzystany.',
    icon: 'CreditCard',
  },
] as const

// === EXAMPLES DATA ===
export const EXAMPLES = [
  {
    id: 1,
    title: 'Analiza reklam konkurencji',
    description: 'Workflow automatycznie monitoruje reklamy wybranych konkurentów w Meta Ad Library. Zbiera kreacje, teksty i formaty, a następnie wysyła Ci gotowy raport – codziennie lub co tydzień, jak wolisz.',
    image: 'workflow-ads-analysis.png',
    videoUrl: VIDEOS.adsAnalysis,
    comparison: {
      manual: ['3-4h tygodniowo', 'Przeglądasz, zapisujesz do Excela'],
      automated: ['Automatycznie, w tle', 'Raport przychodzi na maila'],
    },
  },
  {
    id: 2,
    title: 'Pozyskiwanie leadów z grup Facebook',
    description: 'Workflow skanuje wybrane grupy na Facebooku, wyłapuje posty od osób szukających rozwiązań, które oferujesz, i zapisuje je jako potencjalne leady. Dostajesz listę osób, do których możesz się odezwać.',
    image: 'workflow-fb-leads.png',
    videoUrl: VIDEOS.fbLeads,
    comparison: {
      manual: ['5-6h tygodniowo', 'Scrollujesz, kopiujesz kontakty'],
      automated: ['Kilka minut na przegląd wyników', 'Lista leadów czeka gotowa'],
    },
  },
] as const

// === COMMUNITY BENEFITS ===
export const COMMUNITY_BENEFITS = [
  'Gotowe scenariusze automatyzacji',
  'Wsparcie społeczności',
  'Materiały edukacyjne',
  'Dostęp do ekspertów',
] as const
