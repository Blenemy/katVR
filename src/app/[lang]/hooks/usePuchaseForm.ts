import { useState } from 'react'
import { useFormik } from 'formik'
import { purchaseValidationStepOne } from '../validationSchemas/purchaseValidation_step_one'

export const usePuchaseForm = () => {
  const [isActive, setIsActive] = useState(false)

  const formik = useFormik({
    initialValues: {
      'First Name': '',
      'Last Name': '',
      Email: '',
      PhoneNumber: '',
      'Shipping Adress': '',
      'Shipping Adress 2': ''
    },
    validationSchema: purchaseValidationStepOne,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })

  return {
    formik,
    isActive,
    setIsActive
  }
}
