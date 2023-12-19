import { getDictionary } from '@/app/getDectionaries'

import { Container } from '../components/Container/Container'

import './Purchase.scss'
import { PurchaseHeader } from './PurchaseLayout/PurchaseHeader/PurchaseHeader'
import { PurchaseMainContent } from './PurchaseLayout/PurchaseMainContent/PurchaseMainContent'

const Purchase: React.FC<{ params: { lang: string } }> = async ({ params }) => {
  const t = await getDictionary(params.lang)

  return (
    <section className="purchase">
      <Container>
        <div className="purchase__content">
          <PurchaseHeader />
          <PurchaseMainContent />
        </div>
      </Container>
    </section>
  )
}

export default Purchase
