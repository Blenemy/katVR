import { memo } from 'react'

import { Button } from '../../components/Button/Button'
import { StepOneForm } from './StepOneForm/StepOneForm'
import { StepTwoForm } from './StepTwoForm/StepTwoForm'

import './PurchaseForm.scss'
import { FormikProps } from 'formik'
import { PurchaseFormValues } from '../../types/PurchaseForm'

interface PurchaseFormProps {
  currentStep: number
  handleNextStep: () => Promise<void>
  formik: FormikProps<PurchaseFormValues>
}

export const PurchaseForm: React.FC<PurchaseFormProps> = memo(
  ({ formik, currentStep, handleNextStep }) => {
    // TODO: add last purchase-form component
    const StepComponent = [StepTwoForm, StepOneForm][currentStep]

    return (
      <form
        className="main-purchase__form form-purchase"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-purchase__content">
          <StepComponent formik={formik} />
          <Button
            type="submit"
            text={currentStep === 0 ? 'Next Page' : 'Purchase'}
            classname="form-purchase__button"
            onClick={handleNextStep}
          />
        </div>
      </form>
    )
  }
)
