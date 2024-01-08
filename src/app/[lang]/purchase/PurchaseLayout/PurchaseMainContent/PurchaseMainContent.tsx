'use client'

import { useMultiStepForm } from '@/app/[lang]/hooks/useMultiStepForm'
import { PurchaseNavigation } from '../../PurchaseNavigation/PurchaseNavigation'
import { PurchaseForm } from '../../PurchaseForm/PurchaseForm'
import { StepThreeForm } from '../../PurchaseForm/StepThreeForm/StepThreeForm'
import { Translations } from '@/app/[lang]/types/Translations'

import './PurchaseMainContent.scss'
import { usePathname, useRouter } from 'next/navigation'

interface IPurchaseMainContentProps {
  t: Translations
}

export const PurchaseMainContent: React.FC<IPurchaseMainContentProps> = ({
  t
}) => {
  const { currentStep, currentElement, data, setData } = useMultiStepForm(t)
  const router = useRouter()
  const pathname = usePathname()

  const test = () => {
    router.push(pathname + '?value=123')
  }

  return (
    <section className="purchase__main main-purchase">
      <PurchaseNavigation currentStep={currentStep} t={t} />
      <PurchaseNavigation currentStep={currentStep} design="Desktop" t={t} />
      {currentStep < 2 ? (
        <PurchaseForm
          currentFormElement={currentElement}
          data={data}
          setData={setData}
          t={t}
        />
      ) : (
        <StepThreeForm t={t} />
      )}
    </section>
  )
}
