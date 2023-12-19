import { UnderlinedComponent } from '@/app/[lang]/components/UnderlinedComponent/UnderlinedComponent'

export const PurchaseMainContent = () => {
  return (
    <section className="purchase__main main-purchase">
      <nav className="navigation-bars">
        <UnderlinedComponent text="Place Order" active={true} />
        <UnderlinedComponent text="Pay" active={false} />
        <UnderlinedComponent text="Complete" active={false} />
      </nav>
      <form className="main-purchase__form form-purchase"></form>
    </section>
  )
}
