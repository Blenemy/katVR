import { ControlBar } from './ControlBar/ControlBar'
import { Container } from '../Container/Container'
import { Translations } from '../../types/Translations'

import './Header.scss'
import { HeaderMainblock } from './HeaderLayout/HeaderMainblock'
import { HeaderNavbar } from './HeaderLayout/HeaderNavbar'
import { NavigationMenu } from './NavigationMenu/NavigationMenu'
interface HeaderProps {
  t: Translations
}

export const Header: React.FC<HeaderProps> = ({ t }) => {
  return (
    <>
      <header className="header">
        <Container>
          <div className="header__content">
            <HeaderNavbar t={t} />
            <HeaderMainblock t={t} />
            <ControlBar t={t} />
          </div>
        </Container>
      </header>
      <NavigationMenu t={t} />
    </>
  )
}
