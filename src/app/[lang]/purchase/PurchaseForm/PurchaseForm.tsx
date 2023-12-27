'use client'

import { Button } from '../../components/Button/Button'
import { CustomSelect } from '../../components/CustomSelect/CustomSelect'
import { PriceBar } from '../../components/PriceBar/PriceBar'
import { StepOneForm } from './StepOneForm/StepOneForm'
import { StepTwoForm } from './StepTwoForm/StepTwoForm'

import './PurchaseForm.scss'
import { useMultiStepForm } from '../../hooks/useMultiStepForm'

const OPTIONS = ['1', '2', '3', '4']
const BASE_PRICE = 1200

export const PurchaseForm = () => {
  const { formik, handleNextStep, currentStep } = useMultiStepForm()

  const steps = [
    <StepOneForm formik={formik} key="StepOne" />,
    <StepTwoForm formik={formik} key="StepTwo" />
  ]

  const totalValue = formik.values.quantity * BASE_PRICE

  const handleSelectChange = (name: string) => (value: string) => {
    formik.setFieldValue(name, value)
  }

  return (
    <form
      className="main-purchase__form form-purchase"
      onSubmit={formik.handleSubmit}
    >
      <div className="form-purchase__content">
        <section className="form-purchase__price">
          <CustomSelect
            options={OPTIONS}
            variant="price"
            name="country"
            onChangeFunc={handleSelectChange('quantity')}
            value={formik.values.quantity}
            error={formik.touched.quantity && formik.errors.quantity}
            label="Quantity"
          />
          <PriceBar totalValue={totalValue} />
        </section>
        {steps[currentStep]}
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
