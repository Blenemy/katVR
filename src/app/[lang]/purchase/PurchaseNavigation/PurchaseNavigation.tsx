import Image from 'next/image'

import { UnderlinedComponent } from '../../components/UnderlinedComponent/UnderlinedComponent'
import Logo from '../../../../../public/icons/Logo.svg'
import cn from 'classnames'

import './PurchaseNavigation.scss'

interface IPurchaseNavigationProps {
  currentStep: number
  design?: 'Desktop' | 'Mobile'
}

export const PurchaseNavigation: React.FC<IPurchaseNavigationProps> = ({
  currentStep,
  design = 'Mobile'
}) => {
  const DesktopDesign = (
    <nav className="desktop-navigation-bars">
      <Image
        src={Logo}
        width={76}
        height={16}
        alt="Logo"
        className="desktop-navigation-bars__logo"
      />
      <p
        className={cn('desktop-navigation-bars__step', {
          'desktop-active-step': currentStep === 0
        })}
      >
        Place Order
      </p>
      <p
        className={cn('desktop-navigation-bars__step', {
          'desktop-active-step': currentStep === 1
        })}
      >
        Pay
      </p>
      <p
        className={cn('desktop-navigation-bars__step', {
          'desktop-active-step': currentStep === 2
        })}
      >
        Order complete
      </p>
    </nav>
  )

  if (design === 'Desktop') {
    return DesktopDesign
  }

  return (
    <nav className="navigation-bars">
      <UnderlinedComponent text="Place Order" active={currentStep === 0} />
      <UnderlinedComponent text="Pay" active={currentStep === 1} />
      <UnderlinedComponent text="Complete" active={currentStep === 2} />
    </nav>
  )
}
