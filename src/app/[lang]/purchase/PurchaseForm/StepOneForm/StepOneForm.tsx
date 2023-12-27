import { CustomInput } from '@/app/[lang]/components/CustomInput/CustomInput'
import { CustomSelect } from '@/app/[lang]/components/CustomSelect/CustomSelect'
import { PurchaseFormValues } from '@/app/[lang]/types/PurchaseForm'
import { FormikProps } from 'formik'
import { useCallback } from 'react'

const OPTIONS_CONTRIES = ['Ukraine', 'Poland', 'Great Britain', 'Canada', 'USA']
const OPTIONS_CITIES = ['Kyiv', 'Warsaw', 'London', 'Ottawa', 'Washington']

export const StepOneForm = ({
  formik
}: {
  formik: FormikProps<PurchaseFormValues>
}) => {
  const handleSelectChange = useCallback(
    (name: string) => (value: string) => {
      formik.setFieldValue(name, value)
    },
    [formik]
  )

  return (
    <>
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
          options={OPTIONS_CONTRIES}
          variant="formField"
          label="Country*"
          name="country"
          onChangeFunc={handleSelectChange('country')}
          value={formik.values.country}
          error={formik.touched.country && formik.errors.country}
        />
        <CustomSelect
          options={OPTIONS_CITIES}
          variant="formField"
          label="City*"
          name="city"
          onChangeFunc={handleSelectChange('city')}
          value={formik.values.city}
          error={formik.touched.city && formik.errors.city}
        />
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
      </section>
    </>
  )
}
