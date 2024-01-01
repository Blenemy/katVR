'use client'

import { useMultiStepForm } from '@/app/[lang]/hooks/useMultiStepForm'
import { PurchaseNavigation } from '../../PurchaseNavigation/PurchaseNavigation'
import { PurchaseForm } from '../../PurchaseForm/PurchaseForm'

import './PurchaseMainContent.scss'

export const PurchaseMainContent = () => {
  const { currentStep, currentElement, data, setData } =
    useMultiStepForm()

  return (
    <section className="purchase__main main-purchase">
      <PurchaseNavigation currentStep={currentStep} />
      <PurchaseNavigation currentStep={currentStep} design="Desktop" />
      <PurchaseForm
        currentStep={currentStep}
        currentFormElement={currentElement}
        data={data}
        setData={setData}
      />
    </section>
  )
}
