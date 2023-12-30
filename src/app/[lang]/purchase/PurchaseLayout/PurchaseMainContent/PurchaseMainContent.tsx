'use client'

import { PurchaseForm } from '../../PurchaseForm/PurchaseForm'
import { useMultiStepForm } from '@/app/[lang]/hooks/useMultiStepForm'
import { PurchaseNavigation } from '../../PurchaseNavigation/PurchaseNavigation'

import './PurchaseMainContent.scss'

export const PurchaseMainContent = () => {
  const { formik, handleNextStep, currentStep } = useMultiStepForm()

  return (
    <section className="purchase__main main-purchase">
      <PurchaseNavigation currentStep={currentStep} />
      <PurchaseNavigation currentStep={currentStep} design="Desktop" />
      <PurchaseForm
        formik={formik}
        handleNextStep={handleNextStep}
        currentStep={currentStep}
      />
    </section>
  )
}
