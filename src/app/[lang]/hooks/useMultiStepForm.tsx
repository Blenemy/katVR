import { Dispatch, SetStateAction, useState } from 'react'
import { StepOneForm } from '../purchase/PurchaseForm/StepOneForm/StepOneForm'
import { TPurchaseData } from '../types/PurchaseData'
import { StepTwoForm } from '../purchase/PurchaseForm/StepTwoForm/StepTwoForm'

type TReturnProps = {
  currentStep: number
  currentElement: JSX.Element
  data: TPurchaseData
  setData: Dispatch<SetStateAction<TPurchaseData>>
}

export const useMultiStepForm = (): TReturnProps => {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<TPurchaseData>({
    quantity: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shippingAdress: '',
    shippingAdress2: '',
    country: 'Choose a country',
    city: 'Choose a city',
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    CVV: ''
  })

  const handleNextStep = (newData: Partial<TPurchaseData>) => {
    setData((prev) => ({ ...prev, ...newData }))

    setCurrentStep((prev) => prev + 1)
  }

  const handleSubmitForm = (newData: Partial<TPurchaseData>) => {
    setData((prev) => ({ ...prev, ...newData }))
  }

  const steps = [
    <StepOneForm key={'first-step'} next={handleNextStep} data={data} />,
    <StepTwoForm key={'second-step'} next={handleSubmitForm} data={data} />
  ]

  console.log(data)

  const currentElement = steps[currentStep]

  return { currentStep, currentElement, data, setData }
}

// const sendDataToServer = (): Promise<void> => {
//   return new Promise((resolve) => {
//     // Имитация задержки сетевого запроса, например, 2 секунды
//     setTimeout(() => {
//       resolve() // разрешаем промис после задержки
//     }, 2000)
//   })
// }

// const formik = useFormik({
//   initialValues: {
//     quantity: 1,
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     shippingAdress: '',
//     shippingAdress2: '',
//     country: 'Choose a country',
//     city: 'Choose a city',
//     cardNumber: '',
//     cardHolder: '',
//     expirationDate: '',
//     CVV: ''
//   },
//   validationSchema: purchaseValidationStepOne,
//   validateOnBlur: true,
//   onSubmit: (values) => {
//     sendDataToServer().then(() => {
//       console.log(values)
//       setCurrentStep((prev) => prev + 1)
//     })
//   }
// })

// const handleNextStep = useCallback(async () => {
//   const errors = await formik.validateForm()
//   if (Object.keys(errors).length === 0 && currentStep === 1) {
//     formik.submitForm()
//   } else {
//     setCurrentStep((prev) => prev + 1)
//   }
// }, [formik, currentStep])
