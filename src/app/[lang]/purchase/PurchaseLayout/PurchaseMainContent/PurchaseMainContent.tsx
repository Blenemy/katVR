'use client'

import { UnderlinedComponent } from '@/app/[lang]/components/UnderlinedComponent/UnderlinedComponent'
import { PurchaseForm } from '../../PurchaseForm/PurchaseForm'
import { useMultiStepForm } from '@/app/[lang]/hooks/useMultiStepForm'

export const PurchaseMainContent = () => {
  const { formik, handleNextStep, currentStep } = useMultiStepForm()

  return (
    <section className="purchase__main main-purchase">
      <nav className="navigation-bars">
        <UnderlinedComponent text="Place Order" active={currentStep === 0} />
        <UnderlinedComponent text="Pay" active={currentStep === 1} />
        <UnderlinedComponent text="Complete" active={currentStep === 2} />
      </nav>
      <PurchaseForm
        formik={formik}
        handleNextStep={handleNextStep}
        currentStep={currentStep}
      />
    </section>
  )
}
