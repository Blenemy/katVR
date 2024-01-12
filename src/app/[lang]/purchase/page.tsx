import { getDictionary } from '@/app/getDectionaries'
import { Container } from '../components/Container/Container'
import { PurchaseHeader } from './PurchaseLayout/PurchaseHeader/PurchaseHeader'
import { PurchaseMainContent } from './PurchaseLayout/PurchaseMainContent/PurchaseMainContent'

import './Purchase.scss'

const Purchase: React.FC<{ params: { lang: string } }> = async ({ params }) => {
  const t = await getDictionary(params.lang)

  return (
    <section className="purchase">
      <Container>
        <div className="purchase__content">
          <PurchaseHeader />
          <PurchaseMainContent t={t} />
        </div>
      </Container>
    </section>
  )
}

export default Purchase
