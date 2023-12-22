'use client'

import { Button } from '../../components/Button/Button'
import { CustomSelect } from '../../components/CustomSelect/CustomSelect'
import { usePuchaseForm } from '../../hooks/usePuchaseForm'

import { PriceBar } from '../../components/PriceBar/PriceBar'
import { StepTwoForm } from './StepTwoForm/StepTwoForm'

import './PurchaseForm.scss'

const OPTIONS = ['1', '2', '3', '4']

export const PurchaseForm = () => {
  const { formik } = usePuchaseForm()

  return (
    <form
      className="main-purchase__form form-purchase"
      onSubmit={formik.handleSubmit}
    >
      <div className="form-purchase__content">
        <section className="form-purchase__price">
          <CustomSelect options={OPTIONS} variant="price" />
          <PriceBar />
        </section>
        <StepTwoForm formik={formik} />
        <Button type="submit" text="Purchase" />
      </div>
    </form>
  )
}
