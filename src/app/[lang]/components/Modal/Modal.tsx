import { ReactNode } from 'react'
import cn from 'classnames'
import './Modal.scss'

interface ModalProps {
  children: ReactNode
  isActive: boolean
}

export const Modal: React.FC<ModalProps> = ({ children, isActive }) => {
  return (
    <div
      className={cn('modal', {
        'active-modal': isActive
      })}
    >
      <div
        className={cn('modal__content', {
          'active-modal__content': isActive
        })}
      >
        {children}
      </div>
    </div>
  )
}
