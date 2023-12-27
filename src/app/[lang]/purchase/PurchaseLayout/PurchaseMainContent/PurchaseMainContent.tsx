'use client'

import Image from 'next/image'
import { useCallback } from 'react'

import { PurchaseForm } from '../../PurchaseForm/PurchaseForm'
import { useMultiStepForm } from '@/app/[lang]/hooks/useMultiStepForm'
import { useAppSelector } from '@/lib/hooks'
import { PriceBar } from '@/app/[lang]/components/PriceBar/PriceBar'
import { PurchaseNavigation } from '../../PurchaseNavigation/PurchaseNavigation'
import { CustomSelect } from '@/app/[lang]/components/CustomSelect/CustomSelect'

import './PurchaseMainContent.scss'

const BASE_PRICE = 1200
const OPTIONS = ['1', '2', '3', '4']

export const PurchaseMainContent = () => {
  const { formik, handleNextStep, currentStep } = useMultiStepForm()
  const { images, currentImage } = useAppSelector(
    (state) => state.heroImageSlice
  )

  const totalValue = formik.values.quantity * BASE_PRICE

  const handleSelectChange = useCallback(
    (name: string) => (value: string) => {
      formik.setFieldValue(name, value)
    },
    [formik]
  )

  return (
    <section className="purchase__main main-purchase">
      <PurchaseNavigation currentStep={currentStep} />
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
          <div className="form-purchase__price">
            <CustomSelect
              options={OPTIONS}
              variant="price"
              name="country"
              onChangeFunc={handleSelectChange('quantity')}
              value={formik.values.quantity}
              error={formik.touched.quantity && formik.errors.quantity}
              label="Quantity"
            />
            <PriceBar totalValue={totalValue} />
          </div>
        </div>

        <PurchaseForm
          formik={formik}
          handleNextStep={handleNextStep}
          currentStep={currentStep}
        />
      </div>
    </section>
  )
}
