import './PriceBar.scss'

interface PriceBarProps {
  totalValue: number
}

export const PriceBar: React.FC<PriceBarProps> = ({ totalValue }) => {
  return (
    <div className="price-bar">
      <p className="price-bar__title">Price</p>
      <p className="price-bar__price">{totalValue}$</p>
    </div>
  )
}
