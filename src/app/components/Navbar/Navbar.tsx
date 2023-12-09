import cn from 'classnames'
import Image from 'next/image'
import cross from '../../../../public/icons/cross-white.svg'
import './Navbar.scss'
import { menuItems } from './navLinks'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  handleOpenNavbar: () => void
  isOpened: boolean
}

export const Navbar: React.FC<NavbarProps> = ({
  handleOpenNavbar,
  isOpened
}) => {
  const { t } = useTranslation()

  return (
    <nav
      className={cn('page__menu menu', { 'menu-active': isOpened })}
      id="menu"
    >
      <div className="container">
        <div className="menu__content">
          <Image
            src={cross}
            alt="burgerImage"
            className="menu__close"
            onClick={handleOpenNavbar}
          />
          <ul className="menu__list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu__item">
                <a href={item.href} className="menu__link">
                  {t(`navbar.${item.i18nKey}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
