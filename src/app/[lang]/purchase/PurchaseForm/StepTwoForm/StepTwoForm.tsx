import { CardInput } from '@/app/[lang]/components/CardInput/CardInput'
import { CustomInput } from '@/app/[lang]/components/CustomInput/CustomInput'
import { Form, Formik } from 'formik'

import { purchaseValidationStepTwo } from '@/app/[lang]/validationSchemas/purchaseValidationStepTwo'
import { TPurchaseData } from '@/app/[lang]/types/PurchaseData'
import { Button } from '@/app/[lang]/components/Button/Button'

import { Translations } from '@/app/[lang]/types/Translations'

import './StepTwoForm.scss'

interface IStepTwoFormProps {
  next: (newData: TPurchaseData, final: boolean) => void
  data: TPurchaseData
  t: Translations
}

export const StepTwoForm: React.FC<IStepTwoFormProps> = ({ next, data, t }) => {
  const { CVV, expirationDate, cardHolderName, cardNumber } =
    t.form.personalDetails

  const handleSubmit = (values: TPurchaseData) => {
    const newData = { ...values, quantity: data.quantity }
    next(newData, true)
  }

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={purchaseValidationStepTwo}
    >
      {({
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        setFieldValue
      }) => {
        const handleCardNumberChange = (newCardNumber: string[]) => {
          setFieldValue('cardNumber', newCardNumber)
        }
        return (
          <Form className="step-two-purchase-form">
            <CardInput
              required
              label={cardNumber}
              value={values.cardNumber}
              onChange={handleCardNumberChange}
              error={touched.cardNumber && errors.cardNumber}
            />
            <CustomInput
              name="cardHolder"
              type="text"
              required
              id="cardHolder"
              label={cardHolderName}
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
                label={expirationDate}
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
                label={CVV}
                onChangeFunc={handleChange}
                onBlur={handleBlur}
                value={values.CVV}
                error={touched.CVV && errors.CVV}
              />
            </section>
            <Button
              type="submit"
              text={t.form['submitBtn-page-two']}
              classname="form-purchase__button"
            />
          </Form>
        )
      }}
    </Formik>
  )
}
