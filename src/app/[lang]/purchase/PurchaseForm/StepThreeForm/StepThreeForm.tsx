import { Button } from '@/app/[lang]/components/Button/Button'
import { TextDecorator } from '@/app/[lang]/components/TextDecorator/TextDecorator'
import { useParams, useRouter } from 'next/navigation'
import { Translations } from '@/app/[lang]/types/Translations'

import './StepThreeForm.scss'

interface IStepThreeFormProps {
  t: Translations
}

export const StepThreeForm: React.FC<IStepThreeFormProps> = ({ t }) => {
  const router = useRouter()
  const params = useParams()
  const { title, message, navigateHome } = t.form['last-page']

  const handleBackToHomePage = () => {
    const language = params.lang
    router.push(`/${language}`)
  }

  return (
    <section className="step-three-form">
      <h2 className="step-three-form__title">
        {title[0]} <TextDecorator>{title[1]}</TextDecorator> {title[2]}
      </h2>
      <p className="step-three-form__description">{message}</p>
      <Button
        text={navigateHome}
        type="button"
        classname="step-three-form__button"
        onClick={handleBackToHomePage}
      />
    </section>
  )
}
