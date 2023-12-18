import { HTMLAttributes, memo } from 'react'
import './TextDecorator.scss'

interface TextDecoratorProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export const TextDecorator: React.FC<TextDecoratorProps> = memo(
  ({ children, ...props }) => {
    return (
      <span className="text-decorator" {...props}>
        {children}
      </span>
    )
  }
)
