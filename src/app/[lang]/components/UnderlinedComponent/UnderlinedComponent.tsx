import cn from 'classnames'

import './UnderlinedComponent.scss'
import { HTMLAttributes } from 'react'

interface UnderlinedComponentProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  active: boolean
  classes?: string
}

export const UnderlinedComponent: React.FC<UnderlinedComponentProps> = ({
  text,
  active,
  classes = ''
}) => {
  return (
    <article
      className={cn('underlined-text', {
        'underlined-active': active,
        [classes]: classes
      })}
    >
      {text}
    </article>
  )
}
