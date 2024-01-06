import { memo } from 'react'

import './PriceBar.scss'

interface PriceBarProps {
  totalValue: number
  text: string
}

export const PriceBar: React.FC<PriceBarProps> = memo(
  ({ totalValue, text }) => {
    return (
      <div className="price-bar">
        <p className="price-bar__title">{text}</p>
        <p className="price-bar__price">{totalValue}$</p>
      </div>
    )
  }
)
