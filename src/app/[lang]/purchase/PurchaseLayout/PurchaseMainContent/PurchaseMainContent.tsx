'use client'

import { useMultiStepForm } from '@/app/[lang]/hooks/useMultiStepForm'
import { PurchaseNavigation } from '../../PurchaseNavigation/PurchaseNavigation'
import { PurchaseForm } from '../../PurchaseForm/PurchaseForm'

import { StepThreeForm } from '../../PurchaseForm/StepThreeForm/StepThreeForm'

import './PurchaseMainContent.scss'
import { Translations } from '@/app/[lang]/types/Translations'

interface IPurchaseMainContentProps {
  t: Translations
}

export const PurchaseMainContent: React.FC<IPurchaseMainContentProps> = ({
  t
}) => {
  const { currentStep, currentElement, data, setData } = useMultiStepForm()

  return (
    <section className="purchase__main main-purchase">
      <PurchaseNavigation currentStep={currentStep} t={t} />
      <PurchaseNavigation currentStep={currentStep} design="Desktop" t={t} />
      {currentStep < 2 ? (
        <PurchaseForm
          currentStep={currentStep}
          currentFormElement={currentElement}
          data={data}
          setData={setData}
        />
      ) : (
        <StepThreeForm />
      )}
    </section>
  )
}
