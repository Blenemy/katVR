import { ButtonType } from '../../types/ButtonType'
import './Button.scss'

interface ButtonProps {
  text: string
  type: ButtonType
}

export const Button: React.FC<ButtonProps> = ({ text, type, ...props }) => {
  return (
    <button className="button" {...props} type={type}>
      {text}
    </button>
  )
}
