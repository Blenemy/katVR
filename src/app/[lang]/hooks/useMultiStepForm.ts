import { FormikProps, useFormik } from 'formik'
import { useCallback, useState } from 'react'
import { purchaseValidationStepOne } from '../validationSchemas/purchaseValidationStepOne'
import { PurchaseFormValues } from '../types/PurchaseForm'

type TReturnProps = {
  formik: FormikProps<PurchaseFormValues>
  handleNextStep: () => Promise<void>
  currentStep: number
}

export const useMultiStepForm = (): TReturnProps => {
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
      city: 'Choose a city',
      'Card Holder Name': '',
      'Expiration Date': '',
      CVV: ''
    },
    validationSchema: purchaseValidationStepOne,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleNextStep = useCallback(async () => {
    const errors = await formik.validateForm()
    if (Object.keys(errors).length === 0) {
      setCurrentStep((prev) => prev + 1)
    }
  }, [formik])

  return { formik, handleNextStep, currentStep }
}
