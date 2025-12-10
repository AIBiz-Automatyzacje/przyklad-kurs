// === NAVIGATION ===
export const NAV_LINKS = [
  { id: 'problems', label: 'Problemy', href: '#problems' },
  { id: 'examples', label: 'Przykłady', href: '#examples' },
  { id: 'getting-started', label: 'Jak zacząć', href: '#getting-started' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
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
    description: 'Ręczna synchronizacja danych między narzędziami to strata czasu i ryzyko błędów. Automatyczna integracja aplikacji eliminuje ten problem.',
    icon: 'Copy',
  },
  {
    id: 2,
    title: 'Ręcznie sprawdzacie, co robi konkurencja?',
    description: 'Monitorowanie reklam i działań konkurencji pochłania godziny. Workflow automation zbiera dane za Ciebie w tle.',
    icon: 'MagnifyingGlass',
  },
  {
    id: 3,
    title: 'Tracicie godziny na zadania, które powtarzacie co tydzień?',
    description: 'Rutynowe czynności można zautomatyzować raz i zapomnieć. Gotowe szablony workflow oszczędzają Twój czas.',
    icon: 'Clock',
  },
  {
    id: 4,
    title: 'Płacicie za narzędzia, których nie wykorzystujecie w pełni?',
    description: 'Wiele aplikacji oferuje API i integracje. Automatyzacja procesów biznesowych pozwala wycisnąć z nich maksimum.',
    icon: 'CreditCard',
  },
] as const

// === EXAMPLES DATA ===
export const EXAMPLES = [
  {
    id: 1,
    title: 'Analiza reklam konkurencji',
    description: 'Workflow n8n automatycznie monitoruje reklamy wybranych konkurentów w Meta Ad Library. Zbiera kreacje, teksty i formaty, a następnie wysyła Ci gotowy raport – bez kodowania, codziennie lub co tydzień.',
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
    description: 'Workflow automation skanuje wybrane grupy na Facebooku, wyłapuje posty od osób szukających rozwiązań i automatycznie zapisuje je jako potencjalne leady. Lista kontaktów czeka gotowa w Twoim CRM.',
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
  'Gotowe szablony workflow',
  'Wsparcie społeczności n8n',
  'Materiały o automatyzacji procesów',
  'Dostęp do ekspertów no-code',
] as const

// === FAQ DATA ===
export const FAQ_ITEMS = [
  // Pytania o n8n
  {
    id: 1,
    category: 'n8n',
    question: 'Co to jest n8n?',
    answer: 'Open-source narzędzie do automatyzacji. Możesz je hostować samodzielnie, masz pełną kontrolę nad danymi i brak limitów wykonań.',
  },
  {
    id: 2,
    category: 'n8n',
    question: 'Czy muszę umieć programować?',
    answer: 'Nie. n8n ma wizualny edytor workflow. Zaawansowani mogą dodać własny kod, ale to opcjonalne.',
  },
  {
    id: 3,
    category: 'n8n',
    question: 'Ile kosztuje n8n?',
    answer: 'Self-hosting jest darmowy – płacisz tylko za serwer (~5€/msc). Alternatywnie n8n oferuje płatny cloud.',
  },
  // Pytania o wdrożenie
  {
    id: 4,
    category: 'wdrożenie',
    question: 'Jak szybko nauczę się n8n?',
    answer: 'Podstawy opanujesz w kilka godzin. W Strefie Akademii Automatyzacji znajdziesz darmowe materiały, które przeprowadzą Cię krok po kroku.',
  },
  {
    id: 5,
    category: 'wdrożenie',
    question: 'Czy n8n integruje się z polskimi systemami?',
    answer: 'Tak. Ponad 500 gotowych integracji + możliwość połączenia dowolnego API (Fakturownia, BaseLinker, Subiekt itp.).',
  },
  {
    id: 6,
    category: 'wdrożenie',
    question: 'Gdzie hostować n8n?',
    answer: 'Masz 3 opcje: cloud n8n, własny VPS (np. Hostinger), lub serwer firmowy. Pomagamy wybrać najlepszą.',
  },
  // Pytania o bezpieczeństwo
  {
    id: 7,
    category: 'bezpieczeństwo',
    question: 'Czy moje dane są bezpieczne?',
    answer: 'Przy self-hostingu dane zostają na Twoim serwerze. Pełna zgodność z RODO.',
  },
  // Pytania o Strefę i wsparcie
  {
    id: 8,
    category: 'wsparcie',
    question: 'Czym jest Strefa Akademii Automatyzacji?',
    answer: 'Darmowa społeczność 600+ osób uczących się automatyzacji z n8n. Znajdziesz tu materiały, szablony workflow i wsparcie ekspertów.',
  },
  {
    id: 9,
    category: 'wsparcie',
    question: 'Co jeśli utknę z automatyzacją?',
    answer: 'Masz dostęp do społeczności n8n Polska (4300+ osób), gotowych szablonów i pomocy w Strefie.',
  },
  {
    id: 10,
    category: 'wsparcie',
    question: 'Czy mogę zlecić budowę automatyzacji?',
    answer: 'Tak, mamy listę sprawdzonych partnerów, którzy zbudują workflow za Ciebie.',
  },
] as const
