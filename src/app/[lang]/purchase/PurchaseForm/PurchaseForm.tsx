'use client'

import { Button } from '../../components/Button/Button'
import { CustomInput } from '../../components/CustomInput/CustomInput'
import { CustomSelect } from '../../components/CustomSelect/CustomSelect'
import { PriceBar } from '../../components/PriceBar/PriceBar'
import { usePuchaseForm } from '../../hooks/usePuchaseForm'

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
        <section className="form-purchase__fields">
          <CustomInput
            name="First Name"
            type="text"
            required
            id="First Name"
            label="First Name"
            onChangeFunc={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values['First Name']}
            error={formik.touched['First Name'] && formik.errors['First Name']}
          />
          <CustomInput
            name="Last Name"
            type="text"
            required
            id="Last Name"
            label="Last Name"
            onChangeFunc={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values['Last Name']}
            error={formik.touched['Last Name'] && formik.errors['Last Name']}
          />
          <CustomInput
            name="Email"
            type="email"
            required
            id="Email"
            label="Email"
            onChangeFunc={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Email}
            error={formik.touched.Email && formik.errors.Email}
          />
          <CustomInput
            name="PhoneNumber"
            type="tel"
            required
            id="PhoneNumber"
            label="PhoneNumber"
            onChangeFunc={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PhoneNumber}
            error={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
          />
          <CustomSelect
            options={OPTIONS}
            variant="formField"
            label="Country*"
          />
          <CustomSelect options={OPTIONS} variant="formField" label="City*" />
          <CustomInput
            name="Shipping Adress"
            type="text"
            required
            id="Shipping Adress"
            label="Shipping Adress"
            onChangeFunc={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values['Shipping Adress']}
            error={
              formik.touched['Shipping Adress'] &&
              formik.errors['Shipping Adress']
            }
          />
          <CustomInput
            name="Shipping Adress 2"
            type="text"
            id="Shipping Adress 2"
            label="Shipping Adress 2"
            required={false}
            onChangeFunc={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values['Shipping Adress 2']}
            error={
              formik.touched['Shipping Adress 2'] &&
              formik.errors['Shipping Adress 2']
            }
          />
          <Button type="submit" text="Purchase" />
        </section>
      </div>
    </form>
  )
}
