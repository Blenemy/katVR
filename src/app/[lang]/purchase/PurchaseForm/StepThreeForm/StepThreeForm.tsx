import { Button } from '@/app/[lang]/components/Button/Button'
import { TextDecorator } from '@/app/[lang]/components/TextDecorator/TextDecorator'
import { useParams, useRouter } from 'next/navigation'

import './StepThreeForm.scss'

export const StepThreeForm = () => {
  const router = useRouter()
  const params = useParams()

  const handleBackToHomePage = () => {
    const language = params.lang
    router.push(`/${language}`)
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
        onClick={handleBackToHomePage}
      />
    </section>
  )
}
