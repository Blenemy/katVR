import './styles/page.scss'
import './styles/globals.scss'
import { getDictionary } from '../getDectionaries'
import { Hero } from './components/Hero/Hero'

const Page: React.FC<{ params: { lang: string } }> = async ({ params }) => {
  const t = await getDictionary(params.lang)

  return (
    <>
      <Hero t={t} />
    </>
  )
}

export default Page
