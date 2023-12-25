'use client'

import { Button } from '../../components/Button/Button'
import { CustomSelect } from '../../components/CustomSelect/CustomSelect'

import { PriceBar } from '../../components/PriceBar/PriceBar'

import './PurchaseForm.scss'
import { StepOneForm } from './StepOneForm/StepOneForm'
import { useState } from 'react'
import { StepTwoForm } from './StepTwoForm/StepTwoForm'
import { useFormik } from 'formik'
import { purchaseValidationStepOne } from '../../validationSchemas/purchaseValidation_step_one'

const OPTIONS = ['1', '2', '3', '4']
const BASE_PRICE = 1200

export const PurchaseForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [totalValue, setTotalValue] = useState<number>(BASE_PRICE)

  const handleChangeCurrentAmout = (payload: number) => {
    setTotalValue(BASE_PRICE * payload)
  }

  const formik = useFormik({
    initialValues: {
      'First Name': '',
      'Last Name': '',
      Email: '',
      PhoneNumber: '',
      'Shipping Adress': '',
      'Shipping Adress 2': ''
    },
    validationSchema: purchaseValidationStepOne,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleNextStep = async () => {
    // Validate current form
    const errors = await formik.validateForm()
    if (Object.keys(errors).length === 0) {
      setCurrentStep(currentStep + 1) // Go to the next step if no errors
    }
  }

  const steps = [
    <StepOneForm formik={formik} key="StepOne" />,
    <StepTwoForm formik={formik} key="StepTwo" />
  ]

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
            onChangeFunc={handleChangeCurrentAmout}
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
