import './TextDecorator.scss'

interface TextDecoratorProps {
  children: React.ReactNode
}

export const TextDecorator: React.FC<TextDecoratorProps> = ({ children }) => {
  return <span className="text-decorator">{children}</span>
}
