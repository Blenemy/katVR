import { ControlBar } from './ControlBar/ControlBar'
import { Container } from '../Container/Container'
import { Translations } from '../../types/Translations'
import { NavigationMenu } from './NavigationMenu/NavigationMenu'

import './Hero.scss'
import { Header } from '../Header/Header'
import { HeroLayout } from './HeroLayout/HeroLayout'

interface HeaderProps {
  t: Translations
}

export const Hero: React.FC<HeaderProps> = ({ t }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero__content">
            <Header t={t} />
            <HeroLayout t={t} />
            <ControlBar t={t} />
          </div>
        </Container>
      </section>
      <NavigationMenu t={t} />
    </>
  )
}
