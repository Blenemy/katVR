import Image from 'next/image'
import './FeatureCard.scss'

interface IFeatureCardProps {
  src: string
  text: string
  title: string
}

export const FeatureCard: React.FC<IFeatureCardProps> = ({
  src,
  text,
  title
}) => {
  return (
    <article className="feature-card">
      <div className="feature-card__content">
        <Image className="feature-card__image" src={src} alt="feature" />
        <h5 className="feature-card__title">{title}</h5>
        <p className="feature-card__description">{text}</p>
      </div>
    </article>
  )
}
