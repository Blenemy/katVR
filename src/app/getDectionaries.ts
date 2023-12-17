import 'server-only'

const dictionaries: { [locale: string]: () => Promise<any> } = {
  en: () =>
    import('../../dictionaries/en.json').then((module) => module.default),
  de: () =>
    import('../../dictionaries/de.json').then((module) => module.default),
  esp: () =>
    import('../../dictionaries/esp.json').then((module) => module.default),
  fr: () =>
    import('../../dictionaries/fr.json').then((module) => module.default)
}

export const getDictionary = async (locale: string) => {
  return dictionaries[locale]()
}
