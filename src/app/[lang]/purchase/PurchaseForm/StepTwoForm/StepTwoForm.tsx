import { CardInput } from '@/app/[lang]/components/CardInput/CardInput'
import { CustomInput } from '@/app/[lang]/components/CustomInput/CustomInput'
import { Form, Formik } from 'formik'

import './StepTwoForm.scss'
import { purchaseValidationStepTwo } from '@/app/[lang]/validationSchemas/purchaseValidationStepTwo'
import { TPurchaseData } from '@/app/[lang]/types/PurchaseData'
import { Button } from '@/app/[lang]/components/Button/Button'

interface IStepTwoFormProps {
  next: (newData: Partial<TPurchaseData>) => void
  data: TPurchaseData
}

export const StepTwoForm: React.FC<IStepTwoFormProps> = ({ next, data }) => {
  const handleSubmit = (values: Partial<TPurchaseData>) => {
    next(values)
    console.log('clown')
  }

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={purchaseValidationStepTwo}
    >
      {({ values, handleChange, handleBlur, errors, touched }) => {
        return (
          <Form className="step-two-purchase-form">
            <CardInput required label="Card Number" />
            <CustomInput
              name="cardHolder"
              type="text"
              required
              id="cardHolder"
              label="Card Holder Name"
              onChangeFunc={handleChange}
              onBlur={handleBlur}
              value={values.cardHolder}
              error={touched.cardHolder && errors.cardHolder}
              classname="step-two-purchase-form__field"
            />
            <section className="step-two-purchase-form__credentials">
              <CustomInput
                name="expirationDate"
                type="text"
                required
                inputType="expiration-date"
                placeholder="MM / YY"
                id="expirationDate"
                label="Expiration Date"
                onChangeFunc={handleChange}
                onBlur={handleBlur}
                value={values.expirationDate}
                error={touched.expirationDate && errors.expirationDate}
              />
              <CustomInput
                name="CVV"
                type="text"
                required
                placeholder="000"
                id="CVV"
                label="CVV"
                onChangeFunc={handleChange}
                onBlur={handleBlur}
                value={values.CVV}
                error={touched.CVV && errors.CVV}
              />
            </section>
            <Button
              type="submit"
              text="Purchase"
              classname="form-purchase__button"
            />
          </Form>
        )
      }}
    </Formik>
  )
}
