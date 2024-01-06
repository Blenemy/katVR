interface IHeader {
  title: string
  textDecorator: string
  subtitle: string
  price: string
  button: string
}

interface INavbar {
  about: string
  tech: string
  benefits: string
  contact: string
  language: string
  faq: string
  help: string
}

interface IControlbar {
  faq: string
  help: string
  'more-btn': string
  previous: string
  next: string
}

interface ILanguage {
  english: string
  german: string
  spanish: string
  french: string
}

interface IHelpNavbar {
  title: string[]
  intro: string
  contactMessage: string[]
  supportLinks: string[]
  contacts: string[]
}

interface IPurchaseHeader {
  'place-order': string
  pay: string
  'order-complete': string
}

interface IFormPersonalDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  city: string
  shippingAdress: string
  shippingAdress2: string
  cardNumber: string
  cardHolderName: string
  expirationDate: string
  CVV: string
}

interface IFormLastPage {
  title: string[]
  message: string
  navigateHome: string
}

interface IQuantitySelect {
  qntTitle: string
  qntSelect: string[]
}

interface IForm {
  personalDetails: IFormPersonalDetails
  'last-page': IFormLastPage
  'submitBtn-page-one': string
  'submitBtn-page-two': string
  countries: string[]
  cities: string[]
  quantity: IQuantitySelect
  price: string
}
export interface Translations {
  hero: IHeader
  navbar: INavbar
  'control-bar': IControlbar
  'language-selector': ILanguage
  help: IHelpNavbar
  'purchase-header': IPurchaseHeader
  form: IForm
}
