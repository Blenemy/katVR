import Image from 'next/image'
import backImage from '../../../../../../public/icons/arrow-back.svg'
import { Translations } from '@/app/[lang]/types/Translations'
import { useRouter } from 'next/navigation'

interface LanguageNavbarProps {
  t: Translations
  handleOnClick: () => void
}

export const LanguageNavbar: React.FC<LanguageNavbarProps> = ({
  t,
  handleOnClick
}) => {
  const router = useRouter()

  const handleSwitchLanguage = (payload: string) => () => {
    router.push(`/${payload}`)
  }

  return (
    <>
      <Image
        src={backImage}
        alt="burgerImage"
        className="menu__close menu__close_back"
        onClick={handleOnClick}
      />
      <ul className="menu__list">
        <li className="menu__item" onClick={handleSwitchLanguage('en')}>
          {t['language-selector'].english}
        </li>
        <li className="menu__item" onClick={handleSwitchLanguage('de')}>
          {t['language-selector'].german}
        </li>
      </ul>
    </>
  )
}
