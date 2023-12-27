import { UnderlinedComponent } from '../../components/UnderlinedComponent/UnderlinedComponent'

import './PurchaseNavigation.scss'

export const PurchaseNavigation = ({
  currentStep
}: {
  currentStep: number
}) => {
  return (
    <nav className="navigation-bars">
      <UnderlinedComponent text="Place Order" active={currentStep === 0} />
      <UnderlinedComponent text="Pay" active={currentStep === 1} />
      <UnderlinedComponent text="Complete" active={currentStep === 2} />
    </nav>
  )
}
