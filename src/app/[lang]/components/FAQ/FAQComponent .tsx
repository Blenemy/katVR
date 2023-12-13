'use client'

import { useState } from 'react'
import './FAQ.scss'
import { faqData } from './FAQTabs'
import { TextDecorator } from '../TextDecorator/TextDecorator'

export const FAQComponent = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="faq">
      <h3 className="faq__title">
        FREQUENTLY ASKED <TextDecorator>QUESTIONS</TextDecorator>
      </h3>
      {faqData.map((faq, index) => (
        <div
          className="tab-faq"
          key={index}
          onClick={() => setActiveTab(index)}
        >
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
      ))}
    </section>
  )
}
