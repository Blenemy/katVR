import { UnderlinedComponent } from '@/app/[lang]/components/UnderlinedComponent/UnderlinedComponent'
import { PurchaseForm } from '../../PurchaseForm/PurchaseForm'

export const PurchaseMainContent = () => {
  return (
    <section className="purchase__main main-purchase">
      <nav className="navigation-bars">
        <UnderlinedComponent text="Place Order" active={true} />
        <UnderlinedComponent text="Pay" active={false} />
        <UnderlinedComponent text="Complete" active={false} />
      </nav>
      <PurchaseForm />
    </section>
  )
}
