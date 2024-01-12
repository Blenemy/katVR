import { useEffect } from 'react'

import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { TPurchaseData } from '../types/PurchaseData'
import { Translations } from '../types/Translations'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { StepOneForm } from '../purchase/PurchaseLayout/PurchaseMainContent/PurchaseForm/StepOneForm/StepOneForm'
import { StepTwoForm } from '../purchase/PurchaseLayout/PurchaseMainContent/PurchaseForm/StepTwoForm/StepTwoForm'

type TReturnProps = {
  currentStep: number
  currentElement: JSX.Element
  data: TPurchaseData
  setData: Dispatch<SetStateAction<TPurchaseData>>
}

const sendDataToServer = (someData: TPurchaseData): Promise<void> => {
  return new Promise((resolve) => {
    console.log(someData)

    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

const SESSION_KEY = 'purchaseData'

export const useMultiStepForm = (t: Translations): TReturnProps => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const stepURL = searchParams.get('step') || '0'
  const [currentStep, setCurrentStep] = useState<number>(+stepURL)
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

  useEffect(() => {
    const savedData = sessionStorage.getItem(SESSION_KEY)
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setInitialData(parsedData)
    }
  }, [])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleFinalizeSubmit = useCallback(
    (dataToSubmit: any, stepToUpdate: number) => {
      sendDataToServer(dataToSubmit).then(() => {
        router.push(
          pathname + '?' + createQueryString('step', stepToUpdate.toString())
        )
        sessionStorage.removeItem(SESSION_KEY)
        setCurrentStep(stepToUpdate)
      })
    },
    [createQueryString, pathname, router]
  )

  const updateQueryAndStep = useCallback(
    (nextStep: number) => {
      setCurrentStep(nextStep)
      router.push(
        pathname + '?' + createQueryString('step', nextStep.toString())
      )
    },
    [createQueryString, pathname, router]
  )

  const handleNextStep = useCallback(
    (newData: TPurchaseData, final = false) => {
      const nextStep = currentStep + 1
      const updatedData = { ...initialData, ...newData }
      setInitialData(updatedData)
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(updatedData))

      if (final) {
        handleFinalizeSubmit(newData, nextStep)
      } else {
        updateQueryAndStep(nextStep)
      }
    },
    [currentStep, handleFinalizeSubmit, updateQueryAndStep, initialData]
  )

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

  const currentElement = steps[currentStep - 1]

  return {
    currentStep,
    currentElement,
    data: initialData,
    setData: setInitialData
  }
}
