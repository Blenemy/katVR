'use client'

import Image from 'next/image'
import { useState } from 'react'

import { faqData } from './FAQTabs'
import { TextDecorator } from '../TextDecorator/TextDecorator'
import { Translations } from '../../types/Translations'

import backImage from '../../../../../public/icons/arrow-back.svg'

import './FAQ.scss'
interface FAQComponentProps {
  t: Translations
  handleOnClick: () => void
}

export const FAQComponent: React.FC<FAQComponentProps> = ({
  // t,
  handleOnClick
}) => {
  const [activeTab, setActiveTab] = useState(0)

  const renderFAQ = (
    faq: { question: string; answer: string; lastUpdated: string },
    index: number
  ) => (
    <div className="tab-faq" key={index} onClick={() => setActiveTab(index)}>
      <div className="tab-faq__content">
        <h4 className="tab-faq__title">{faq.question}</h4>
        {activeTab === index && (
          <>
            <p className="tab-faq__text">{faq.answer}</p>
            <p className="tab-faq__date">Last updated: {faq.lastUpdated}</p>
          </>
        )}
      </div>
    </div>
  )

  return (
    <>
      <Image
        src={backImage}
        alt="burgerImage"
        className="menu__close menu__close_back"
        onClick={handleOnClick}
      />
      <section className="faq">
        <h3 className="faq__title">
          FREQUENTLY ASKED <TextDecorator>QUESTIONS</TextDecorator>
        </h3>
        <section className="faq__tabs">{faqData.map(renderFAQ)}</section>
      </section>
    </>
  )
}
