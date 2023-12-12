import './styles/page.scss'
import './styles/globals.scss'
import { Header } from './components/Header/Header'
import { getDictionary } from '../getDectionaries'

const Page: React.FC<{ params: { lang: string } }> = async ({ params }) => {
  const t = await getDictionary(params.lang)

  return (
    <>
      <Header t={t} />
    </>
  )
}

export default Page
