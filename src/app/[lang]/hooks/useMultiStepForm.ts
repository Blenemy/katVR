import { useFormik } from 'formik'
import { useState } from 'react'
import { purchaseValidationStepOne } from '../validationSchemas/purchaseValidation_step_one'

export const useMultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const formik = useFormik({
    initialValues: {
      quantity: 1,
      'First Name': '',
      'Last Name': '',
      Email: '',
      PhoneNumber: '',
      'Shipping Adress': '',
      'Shipping Adress 2': '',
      country: 'Choose a country',
      city: 'Choose a city'
    },
    validationSchema: purchaseValidationStepOne,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleNextStep = async () => {
    const errors = await formik.validateForm()
    if (Object.keys(errors).length === 0) {
      setCurrentStep(currentStep + 1)
    }
  }

  return { formik, handleNextStep, currentStep }
}
