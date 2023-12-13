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

export interface Translations {
  header: Header
  navbar: Navbar
  'control-bar': Controlbar
}
