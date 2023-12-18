import { ReactNode, memo } from 'react'
import cn from 'classnames'

import './Modal.scss'

interface ModalProps {
  children: ReactNode
  isActive: boolean
  handleToggleModal: () => void
}

export const Modal: React.FC<ModalProps> = memo(
  ({ children, isActive, handleToggleModal }) => {
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
          <>
            <SvgComponent
              onClick={handleToggleModal}
              className="modal__close"
            />
            {children}
          </>
        </div>
      </div>
    )
  }
)

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path stroke="#fff" d="m1.354.996 16.867 16.867M1.134 17.867 18.001 1" />
  </svg>
)
