import cn from 'classnames'
import cross from '../../../../public/icons/cross-white.svg'
import './Navbar.scss'
import Image from 'next/image'

interface NavbarProps {
  handleOpenNavbar: () => void
  isOpened: boolean
}

export const Navbar: React.FC<NavbarProps> = ({
  handleOpenNavbar,
  isOpened
}) => {
  return (
    <nav
      className={cn('page__menu menu', {
        'menu-active': isOpened
      })}
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
            <li className="menu__item">
              <a href="#" className="menu__link">
                About
              </a>
            </li>
            <li className="menu__item">
              <a href="#features" className="menu__link">
                Tech
              </a>
            </li>
            <li className="menu__item">
              <a href="#materials" className="menu__link">
                Benefits
              </a>
            </li>
            <li className="menu__item">
              <a href="#meet-us" className="menu__link">
                Contact
              </a>
            </li>
            <li className="menu__item">
              <a href="#footer" className="menu__link">
                Language
              </a>
            </li>
            <li className="menu__item">
              <a href="#footer" className="menu__link">
                FAQ
              </a>
            </li>
            <li className="menu__item">
              <a href="#footer" className="menu__link">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
