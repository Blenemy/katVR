import Image from 'next/image'
import arrowMoreBlue from '../../../../../../public/icons/arrow-more-blue.svg'
import arrowMoreWhite from '../../../../../../public/icons/arrow-more-white.svg'

export const FAQItem = ({ faq, index, isActive, setActiveTab }: any) => {
  return (
    <div className="tab-faq" key={index} onClick={() => setActiveTab(index)}>
      <div className="tab-faq__content">
        <div className="tab-faq__title-cotainer">
          <h4 className="tab-faq__title">{faq.question}</h4>
          <Image
            alt="arrowDown"
            src={isActive ? arrowMoreBlue : arrowMoreWhite}
            className="tab-faq__arrow-more-img"
          />
        </div>
        {isActive && (
          <>
            <p className="tab-faq__text">{faq.answer}</p>
            <p className="tab-faq__date">Last updated: {faq.lastUpdated}</p>
          </>
        )}
      </div>
    </div>
  )
}
