import { CustomInput } from '@/app/[lang]/components/CustomInput/CustomInput'
import { CustomSelect } from '@/app/[lang]/components/CustomSelect/CustomSelect'
import { Button } from '@/app/[lang]/components/Button/Button'
import { Form, Formik } from 'formik'
import { TPurchaseData } from '@/app/[lang]/types/PurchaseData'
import { purchaseValidationStepOne } from '@/app/[lang]/validationSchemas/purchaseValidationStepOne'

import './StepOneForm.scss'

const OPTIONS_CONTRIES: string[] = [
  'Ukraine',
  'Poland',
  'Great Britain',
  'Canada',
  'USA'
]
const OPTIONS_CITIES: string[] = [
  'Kyiv',
  'Warsaw',
  'London',
  'Ottawa',
  'Washington'
]

interface IStepOneFormProps {
  next: (newData: Partial<TPurchaseData>) => void
  data: TPurchaseData
}

export const StepOneForm: React.FC<IStepOneFormProps> = ({ next, data }) => {
  const handleSubmit = (values: Partial<TPurchaseData>) => {
    next(values)
  }

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={purchaseValidationStepOne}
    >
      {({
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        setFieldValue
      }) => {
        const handleSelectChange = (name: string) => (value: string) => {
          setFieldValue(name, value)
        }

        return (
          <Form className="step-one-purchase-form">
            <CustomInput
              name="firstName"
              type="text"
              required
              id="firstName"
              label="First Name"
              onChangeFunc={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              error={touched.firstName && errors.firstName}
              classname="step-one-purchase-form__field"
            />
            <CustomInput
              name="lastName"
              type="text"
              required
              id="lastName"
              label="Last Name"
              onChangeFunc={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              error={touched.lastName && errors.lastName}
              classname="step-one-purchase-form__field"
            />
            <CustomInput
              name="email"
              type="email"
              required
              id="email"
              label="Email"
              onChangeFunc={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
              classname="step-one-purchase-form__field"
            />
            <CustomInput
              name="phone"
              type="tel"
              required
              id="phone"
              label="PhoneNumber"
              onChangeFunc={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={touched.phone && errors.phone}
              classname="step-one-purchase-form__field"
            />
            <CustomSelect
              options={OPTIONS_CONTRIES}
              variant="formField"
              label="Country*"
              name="country"
              onChangeFunc={handleSelectChange('country')}
              value={values.country}
              error={touched.country && errors.country}
              classname="step-one-purchase-form__field"
            />
            <CustomSelect
              options={OPTIONS_CITIES}
              variant="formField"
              label="City*"
              name="city"
              onChangeFunc={handleSelectChange('city')}
              value={values.city}
              error={touched.city && errors.city}
              classname="step-one-purchase-form__field"
            />
            <CustomInput
              name="shippingAdress"
              type="text"
              required
              id="shippingAdress"
              label="Shipping Adress"
              onChangeFunc={handleChange}
              onBlur={handleBlur}
              value={values.shippingAdress}
              error={touched.shippingAdress && errors.shippingAdress}
              classname="step-one-purchase-form__field"
            />
            <CustomInput
              name="shippingAdress2"
              type="text"
              id="shippingAdress2"
              label="Shipping Adress 2"
              required={false}
              onChangeFunc={handleChange}
              onBlur={handleBlur}
              value={values.shippingAdress2}
              error={touched.shippingAdress2 && errors.shippingAdress2}
              classname="step-one-purchase-form__field"
            />
            <Button
              type="submit"
              text="Next page"
              classname="form-purchase__button"
            />
          </Form>
        )
      }}
    </Formik>
  )
}
