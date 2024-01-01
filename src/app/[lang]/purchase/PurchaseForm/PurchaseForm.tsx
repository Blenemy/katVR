import { Dispatch, SetStateAction, memo } from 'react'
import Image from 'next/image'

import { CustomSelect } from '../../components/CustomSelect/CustomSelect'
import { PriceBar } from '../../components/PriceBar/PriceBar'
import { useAppSelector } from '@/lib/hooks'
import { TPurchaseData } from '../../types/PurchaseData'

import './PurchaseForm.scss'

interface PurchaseFormProps {
  currentStep: number
  currentFormElement: JSX.Element
  data: TPurchaseData
  setData: Dispatch<SetStateAction<TPurchaseData>>
}

const OPTIONS: string[] = ['1', '2', '3', '4']
const BASE_PRICE: number = 1200

export const PurchaseForm: React.FC<PurchaseFormProps> = memo(
  ({ currentFormElement, data, setData }) => {
    const { images, currentImage } = useAppSelector(
      (state) => state.heroImageSlice
    )

    const handleSelectChange = (name: string) => (value: string) => {
      setData((prevData) => ({ ...prevData, [name]: value }))
    }

    const totalValue = data.quantity * BASE_PRICE

    return (
      <div className="main-purchase__content-wrapper">
        <div className="main-purchase__quantity-selector">
          <div className="main-purchase__image">
            <Image
              alt="purchase-choice"
              src={images[currentImage]}
              className="main-purchase__img"
              width={524}
              height={277}
            />
          </div>
          <div className="main-purchase__price">
            <CustomSelect
              options={OPTIONS}
              variant="price"
              name="quantity"
              onChangeFunc={handleSelectChange('quantity')}
              value={data.quantity}
              label="Quantity"
            />
            <PriceBar totalValue={totalValue} />
          </div>
        </div>
        <div className="main-purchase__form form-purchase">
          <div className="form-purchase__content">{currentFormElement}</div>
        </div>
      </div>
    )
  }
)
