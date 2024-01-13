import { ControlBar } from './ControlBar/ControlBar'
import { Translations } from '../../types/Translations'
import { NavigationMenu } from './NavigationMenu/NavigationMenu'

import { HeroLayout } from './HeroLayout/HeroLayout'
import { Header } from '../../components/Header/Header'
import { Container } from '../../components/Container/Container'

import './Hero.scss'

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
