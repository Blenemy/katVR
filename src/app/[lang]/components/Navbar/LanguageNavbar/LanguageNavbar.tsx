import Image from 'next/image'
import backImage from '../../../../../../public/icons/arrow-back.svg'
import { Translations } from '@/app/[lang]/types/Translations'

interface LanguageNavbarProps {
  t: Translations
  handleOnClick: () => void
}

export const LanguageNavbar: React.FC<LanguageNavbarProps> = ({
  // t,
  handleOnClick
}) => {
  return (
    <>
      <Image
        src={backImage}
        alt="burgerImage"
        className="menu__close menu__close_back"
        onClick={handleOnClick}
      />
      <ul className="menu__list">
        <li className="menu__item">English</li>
        <li className="menu__item">German</li>
      </ul>
    </>
  )
}
