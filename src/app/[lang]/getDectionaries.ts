import 'server-only'

const dictionaries: { [locale: string]: () => Promise<any> } = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default)
}

export const getDictionary = async (locale: 'en' | 'de') => {
  return dictionaries[locale]()
}
