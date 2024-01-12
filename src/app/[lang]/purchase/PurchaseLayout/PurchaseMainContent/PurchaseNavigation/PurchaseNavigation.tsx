import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'

import { UnderlinedComponent } from '../../../../components/UnderlinedComponent/UnderlinedComponent'
import cn from 'classnames'
import { IPurchaseHeader, Translations } from '../../../../types/Translations'

import Logo from '../../../../../../../public/icons/Logo.svg'

import './PurchaseNavigation.scss'

const NAV_STEPS = ['place-order', 'pay', 'order-complete']

const DesktopNavigation = ({
  currentStep,
  t,
  navigateHome
}: {
  currentStep: number
  t: Translations
  navigateHome: () => void
}) => (
  <nav className="desktop-navigation-bars">
    <Image
      src={Logo}
      width={76}
      height={16}
      alt="Logo"
      className="desktop-navigation-bars__logo"
      onClick={navigateHome}
    />
    {NAV_STEPS.map((step, index) => (
      <p
        key={step}
        className={cn('desktop-navigation-bars__step', {
          'desktop-active-step': currentStep === index + 1
        })}
      >
        {t['purchase-header'][step as keyof IPurchaseHeader]}
      </p>
    ))}
  </nav>
)

const MobileNavigation = ({ currentStep }: { currentStep: number }) => (
  <nav className="navigation-bars">
    <UnderlinedComponent text="Place Order" active={currentStep === 0} />
    <UnderlinedComponent text="Pay" active={currentStep === 1} />
    <UnderlinedComponent text="Complete" active={currentStep === 2} />
  </nav>
)

interface IPurchaseNavigationProps {
  currentStep: number
  design?: 'Desktop' | 'Mobile'
  t: Translations
}

export const PurchaseNavigation: React.FC<IPurchaseNavigationProps> = ({
  currentStep,
  design = 'Mobile',
  t
}) => {
  const router = useRouter()
  const params = useParams()

  const backToHome = () => {
    const lang = params.lang
    router.push(`/${lang}`)
  }

  return design === 'Desktop' ? (
    <DesktopNavigation
      currentStep={currentStep}
      t={t}
      navigateHome={backToHome}
    />
  ) : (
    <MobileNavigation currentStep={currentStep} />
  )
}
