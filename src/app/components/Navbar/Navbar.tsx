import cn from 'classnames'
import './Navbar.scss'

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
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Basket
              </a>
            </li>
            <li className="menu__item">
              <a href="#features" className="menu__link">
                Features
              </a>
            </li>
            <li className="menu__item">
              <a href="#materials" className="menu__link">
                Materials
              </a>
            </li>
            <li className="menu__item">
              <a href="#meet-us" className="menu__link">
                About us
              </a>
            </li>
            <li className="menu__item">
              <a href="#footer" className="menu__link">
                Message us
              </a>
            </li>
          </ul>
          <a href="#" className="menu__close close-menu">
            <div className="close-menu__text" onClick={handleOpenNavbar}>
              Close
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}
