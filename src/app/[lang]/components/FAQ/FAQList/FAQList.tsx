import { useState } from 'react'
import { faqData } from '../FAQdata/FAQTabs'
import { FAQItem } from '../FAQItem/FAQItem'

export const FAQList = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="faq__tabs">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          index={index}
          isActive={activeTab === index}
          setActiveTab={setActiveTab}
        />
      ))}
    </section>
  )
}
