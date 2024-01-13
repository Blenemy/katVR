import { getDictionary } from '../getDectionaries'
import { Hero } from './homepage/Hero/Hero'
import { FeatureCard } from './components/FeatureCard/FeatureCard'

import network from '../../../public/icons/network-feature.svg'
import education from '../../../public/icons/education.svg'
import skyline from '../../../public/icons/skyline.svg'
import fitness from '../../../public/icons/fitness.svg'

import './styles/page.scss'
import './styles/globals.scss'

const Page: React.FC<{ params: { lang: string } }> = async ({ params }) => {
  const t = await getDictionary(params.lang)

  return (
    <>
      <Hero t={t} />
      <FeatureCard
        text="Create aducational simulations, trainings and much more with unlimited virtual space and minimum physical space"
        title="EDUCATION"
        src={education}
      />
      <FeatureCard
        text="Desighn architectural projects in a deeply realistic environment allowing visitors to freely walk around, and feel their vibe"
        title="REAL ESTATE"
        src={skyline}
      />
      <FeatureCard
        text="Combine business with pleasure, and discover countless ways to stay fit while playing your favorite VR Games!"
        title="FITNESS"
        src={fitness}
      />
      <FeatureCard
        text="Hang out with your friends in the virtual world when you can’t meet space requirements"
        title="SOCIAL INTERACTIONS"
        src={network}
      />
    </>
  )
}

export default Page
