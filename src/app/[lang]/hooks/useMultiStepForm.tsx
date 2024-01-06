import { Dispatch, SetStateAction, useState } from 'react'
import { StepOneForm } from '../purchase/PurchaseForm/StepOneForm/StepOneForm'
import { TPurchaseData } from '../types/PurchaseData'
import { StepTwoForm } from '../purchase/PurchaseForm/StepTwoForm/StepTwoForm'
import { Translations } from '../types/Translations'

type TReturnProps = {
  currentStep: number
  currentElement: JSX.Element
  data: TPurchaseData
  setData: Dispatch<SetStateAction<TPurchaseData>>
}

const sendDataToServer = (someData: any): Promise<void> => {
  return new Promise((resolve) => {
    console.log(someData)

    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

export const useMultiStepForm = (t: Translations): TReturnProps => {
  const [currentStep, setCurrentStep] = useState(0)
  const [initialData, setInitialData] = useState<TPurchaseData>({
    quantity: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shippingAdress: '',
    shippingAdress2: '',
    country: 'Choose a country',
    city: 'Choose a city',
    cardNumber: ['', '', '', ''],
    cardHolder: '',
    expirationDate: '',
    CVV: ''
  })

  const handleNextStep = (newData: Partial<TPurchaseData>, final = false) => {
    setInitialData((prev) => ({ ...prev, ...newData }))

    if (final) {
      sendDataToServer(newData).then(() => {
        setCurrentStep((prev) => prev + 1)
      })

      return
    }

    setCurrentStep((prev) => prev + 1)
  }

  const steps = [
    <StepOneForm
      key={'first-step'}
      next={handleNextStep}
      data={initialData}
      t={t}
    />,
    <StepTwoForm
      key={'second-step'}
      next={handleNextStep}
      data={initialData}
      t={t}
    />
  ]

  const currentElement = steps[currentStep]

  return {
    currentStep,
    currentElement,
    data: initialData,
    setData: setInitialData
  }
}
