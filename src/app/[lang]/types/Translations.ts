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

export interface Translations {
  header: Header
  navbar: Navbar
}
