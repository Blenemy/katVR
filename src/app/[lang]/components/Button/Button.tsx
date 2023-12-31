import { HTMLAttributes } from 'react'
import { ButtonType } from '../../types/ButtonType'

import './Button.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  type: ButtonType
  classname?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  classname = '',
  ...props
}) => {
  return (
    <button className={`button ${classname}`} {...props} type={type}>
      {text}
    </button>
  )
}
