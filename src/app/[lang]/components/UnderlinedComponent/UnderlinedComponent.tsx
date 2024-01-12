import cn from 'classnames'

import { HTMLAttributes } from 'react'

import './UnderlinedComponent.scss'

interface UnderlinedComponentProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  active: boolean
  classes?: string
}

export const UnderlinedComponent: React.FC<UnderlinedComponentProps> = ({
  text,
  active,
  classes = '',
  ...props
}) => {
  return (
    <article
      className={cn('underlined-text', {
        'underlined-active': active,
        [classes]: classes
      })}
      {...props}
    >
      {text}
    </article>
  )
}
