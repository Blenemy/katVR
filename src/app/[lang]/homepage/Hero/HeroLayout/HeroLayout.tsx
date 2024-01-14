import { Translations } from '@/app/[lang]/types/Translations'
import { HeroImage } from './HeroImage/HeroImage'

import { TextDecorator } from '@/app/[lang]/components/TextDecorator/TextDecorator'
import { PlayVideo } from '@/app/[lang]/components/PlayVideo/PlayVideo'
import { Button } from '@/app/[lang]/components/Button/Button'

import './HeroLayout.scss'

export const HeroLayout = ({ t }: { t: Translations }) => {
  return (
    <section className="hero__main-block main-block-hero">
      <article className="hero__hero main-block-hero__article main-block-hero__article_image">
        <HeroImage />
      </article>
      <article className="hero__main-content main-block-hero__article main-block-hero__article_content">
        <h1 className="hero__title">
          {t.hero.title} <TextDecorator>{t.hero.textDecorator}</TextDecorator>
        </h1>
        <section className="hero__text-wrapper">
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <p className="hero__price">{t.hero.price}</p>
          <PlayVideo classname="hero__video-play" />
        </section>

        <Button
          type="button"
          text={t.hero.button}
          classname="hero__button hero__button_down"
        />
      </article>
    </section>
  )
}
