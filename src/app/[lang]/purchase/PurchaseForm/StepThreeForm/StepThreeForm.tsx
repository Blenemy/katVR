import { Button } from '@/app/[lang]/components/Button/Button'

import './StepThreeForm.scss'
import { TextDecorator } from '@/app/[lang]/components/TextDecorator/TextDecorator'

export const StepThreeForm = () => {
  const handleBackToHomePage = () => {
    console.log('last form step')
  }

  return (
    <section className="step-three-form">
      <h2 className="step-three-form__title">
        Thank you for <TextDecorator>your</TextDecorator> order!
      </h2>
      <p className="step-three-form__description">
        Your order has been placed and is being processed. You will recive an
        email with the order details
      </p>
      <Button
        text="Back to homepage"
        type="button"
        classname="step-three-form__button"
      />
    </section>
  )
}
