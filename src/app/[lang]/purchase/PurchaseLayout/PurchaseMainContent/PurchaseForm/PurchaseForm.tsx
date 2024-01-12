import { Dispatch, SetStateAction, memo } from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/lib/hooks'

import { TPurchaseData } from '@/app/[lang]/types/PurchaseData'
import { Translations } from '@/app/[lang]/types/Translations'

import './PurchaseForm.scss'
import { CustomSelect } from '@/app/[lang]/components/CustomSelect/CustomSelect'
import { PriceBar } from '@/app/[lang]/components/PriceBar/PriceBar'

interface PurchaseFormProps {
  currentFormElement: JSX.Element
  data: TPurchaseData
  setData: Dispatch<SetStateAction<TPurchaseData>>
  t: Translations
}

const BASE_PRICE: number = 1200

export const PurchaseForm: React.FC<PurchaseFormProps> = memo(
  ({ currentFormElement, data, setData, t }) => {
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
              options={t.form.quantity.qntSelect}
              variant="price"
              name="quantity"
              onChangeFunc={handleSelectChange('quantity')}
              value={data.quantity}
              label={t.form.quantity.qntTitle}
            />
            <PriceBar totalValue={totalValue} text={t.form.price} />
          </div>
        </div>
        <div className="main-purchase__form form-purchase">
          <div className="form-purchase__content">{currentFormElement}</div>
        </div>
      </div>
    )
  }
)
