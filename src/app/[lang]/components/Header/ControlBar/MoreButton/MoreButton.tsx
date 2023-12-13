import './MoreButton.scss'

interface MoreButtonProps {
  text: string
  classes?: string
}

export const MoreButton: React.FC<MoreButtonProps> = ({ text, classes }) => {
  return <article className={`${classes} more-button`}>{text}</article>
}
