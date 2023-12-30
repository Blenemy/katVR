import { FormikProps, useFormik } from 'formik'
import { useCallback, useState } from 'react'
import { purchaseValidationStepOne } from '../validationSchemas/purchaseValidationStepOne'
import { PurchaseFormValues } from '../types/PurchaseForm'

type TReturnProps = {
  formik: FormikProps<PurchaseFormValues>
  handleNextStep: () => Promise<void>
  currentStep: number
}

const sendDataToServer = (): Promise<void> => {
  return new Promise((resolve) => {
    // Имитация задержки сетевого запроса, например, 2 секунды
    setTimeout(() => {
      resolve() // разрешаем промис после задержки
    }, 2000)
  })
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
      cardNumber: '',
      'Card Holder Name': '',
      'Expiration Date': '',
      CVV: ''
    },
    validationSchema: purchaseValidationStepOne,
    validateOnBlur: true,
    onSubmit: (values) => {
      sendDataToServer().then(() => {
        console.log(values)
        setCurrentStep((prev) => prev + 1)
      })
    }
  })

  const handleNextStep = useCallback(async () => {
    const errors = await formik.validateForm()
    if (Object.keys(errors).length === 0 && currentStep === 1) {
      formik.submitForm()
    } else {
      setCurrentStep((prev) => prev + 1)
    }
  }, [formik, currentStep])

  return { formik, handleNextStep, currentStep }
}
