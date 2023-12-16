import Image from 'next/image'

import cross from '../../../../../../public/icons/cross-white.svg'
import { Translations } from '@/app/[lang]/types/Translations'

interface DefaultNavbarProps {
  t: Translations
  handleOnClick: () => void
  handleLanguageClick: () => void
  handleHelpClick: () => void
  handleFAQClick: () => void
}

export const DefaultNavbar: React.FC<DefaultNavbarProps> = ({
  t,
  handleLanguageClick,
  handleOnClick,
  handleHelpClick,
  handleFAQClick
}) => {
  return (
    <>
      <Image
        src={cross}
        alt="burgerImage"
        className="menu__close"
        onClick={handleOnClick}
      />
      <ul className="menu__list">
        <li className="menu__item">{t.navbar.about}</li>
        <li className="menu__item">{t.navbar.tech}</li>
        <li className="menu__item">{t.navbar.benefits}</li>
        <li className="menu__item">{t.navbar.contact}</li>
        <li className="menu__item" onClick={handleLanguageClick}>
          {t.navbar.language}
        </li>
        <li className="menu__item" onClick={handleFAQClick}>
          {t.navbar.faq}
        </li>
        <li className="menu__item" onClick={handleHelpClick}>
          {t.navbar.help}
        </li>
      </ul>
    </>
  )
}
