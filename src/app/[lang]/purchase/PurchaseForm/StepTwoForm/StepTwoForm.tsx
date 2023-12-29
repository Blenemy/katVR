import { CardInput } from '@/app/[lang]/components/CardInput/CardInput'
import { CustomInput } from '@/app/[lang]/components/CustomInput/CustomInput'
import { PurchaseFormValues } from '@/app/[lang]/types/PurchaseForm'
import { FormikProps } from 'formik'

import './StepTwoForm.scss'

export const StepTwoForm = ({
  formik
}: {
  formik: FormikProps<PurchaseFormValues>
}) => {
  return (
    <section className="step-two-purchase-form">
      <CardInput required label="Card Number" />
      <CustomInput
        name="Card Holder Name"
        type="text"
        required
        id="Card Holder Name"
        label="Card Holder Name"
        onChangeFunc={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values['Card Holder Name']}
        error={
          formik.touched['Card Holder Name'] &&
          formik.errors['Card Holder Name']
        }
        classname="step-two-purchase-form__field"
      />
      <section className="step-two-purchase-form__credentials">
        <CustomInput
          name="Expiration Date"
          type="text"
          required
          inputType="expiration-date"
          placeholder="MM / YY"
          id="Expiration Date"
          label="Expiration Date"
          onChangeFunc={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values['Expiration Date']}
          error={
            formik.touched['Expiration Date'] &&
            formik.errors['Expiration Date']
          }
        />
        <CustomInput
          name="CVV"
          type="text"
          required
          placeholder="000"
          id="CVV"
          label="CVV"
          onChangeFunc={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.CVV}
          error={formik.touched.CVV && formik.errors.CVV}
        />
      </section>
    </section>
  )
}
