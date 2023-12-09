import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: {
        translation: {
          'header.title': 'THE NEW START OF',
          'header.textDecorator': 'VR LOCOMOTION',
          'header.subtitle':
            'Discover the most comprehensive VR Locomotion system, and unlock infinite motion in any games on any platforms!',
          'header.price': '1200$',
          'header.button': 'Buy Now'
        }
      },
      de: {
        translation: {
          'header.title': 'DER NEUE BEGINN VON',
          'header.textDecorator': 'VR-FORTBEWEGUNG',
          'header.subtitle':
            'Entdecken Sie das umfassendste VR-Fortbewegungssystem und erschließen Sie unendliche Bewegungsmöglichkeiten in allen Spielen auf allen Plattformen!',
          'header.price': '1200$',
          'header.button': 'Jetzt kaufen'
        }
      }
    }
  })

export default i18n
