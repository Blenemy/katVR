import { ReactNode } from 'react'
import './Container.scss'

interface ContainerProps {
  children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>
}
