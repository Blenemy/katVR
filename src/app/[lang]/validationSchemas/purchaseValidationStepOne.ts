import * as Yup from 'yup'

export const purchaseValidationStepOne = Yup.object({
  firstName: Yup.string()
    .required('Please, fill your name*')
    .min(3, 'At least 3 characters'),
  lastName: Yup.string()
    .required('Please, fill your last name*')
    .min(3, 'At least 3 characters'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@([a-zA-Z]+[-])*[a-zA-Z]+(\.[a-zA-Z]{2,4})+$/,
      'Invalid email format'
    )
    .required('Please, fill your email*'),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Invalid phone number format')
    .required('Phone number is required'),
  shippingAdress: Yup.string()
    .required('Please specify your adress')
    .max(30, 'Maximum 30 characters'),
  shippingAdress2: Yup.string().max(30, 'Maximum 30 characters'),
  country: Yup.string()
    .notOneOf(['Choose a country'], 'You must select a country')
    .required('Country is required'),
  city: Yup.string()
    .notOneOf(['Choose a city'], 'You must select a city')
    .required('City is required')
})
