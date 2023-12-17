import Image from 'next/image'
import { TextDecorator } from '../TextDecorator/TextDecorator'

import backImage from '../../../../../public/icons/arrow-back.svg'

import './FAQ.scss'
import { Translations } from '../../types/Translations'
import { FAQList } from './FAQList/FAQList'

interface FAQComponentProps {
  t: Translations
  handleOnClick?: () => void
  isDesktop?: boolean
}

export const FAQComponent: React.FC<FAQComponentProps> = ({
  handleOnClick,
  isDesktop = false
}) => {
  return (
    <>
      {!isDesktop && (
        <Image
          src={backImage}
          alt="burgerImage"
          className="menu__close menu__close_back"
          onClick={handleOnClick}
        />
      )}
      <section className="faq">
        <h3 className="faq__title">
          FREQUENTLY ASKED <TextDecorator>QUESTIONS</TextDecorator>
        </h3>
        <FAQList />
      </section>
    </>
  )
}
