interface Header {
  title: string
  textDecorator: string
  subtitle: string
  price: string
  button: string
}

interface Navbar {
  about: string
  tech: string
  benefits: string
  contact: string
  language: string
  faq: string
  help: string
}

interface Controlbar {
  faq: string
  help: string
  'more-btn': string
  previous: string
  next: string
}

interface Language {
  english: string
  german: string
  spanish: string
  french: string
}

interface HelpNavbar {
  title: string[]
  intro: string
  contactMessage: string[]
  supportLinks: string[]
  contacts: string[]
}

export interface Translations {
  hero: Header
  navbar: Navbar
  'control-bar': Controlbar
  'language-selector': Language
  help: HelpNavbar
}
