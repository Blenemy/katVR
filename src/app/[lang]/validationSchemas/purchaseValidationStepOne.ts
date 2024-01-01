import * as Yup from 'yup'

export const purchaseValidationStepOne = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string()
    // .matches(/^[a-zA-Z0-9._-]+@([a-zA-Z]+[-])*[a-zA-Z]+(\.[a-zA-Z]{2,4})+$/)
    .required(),
  phone: Yup.string().required(),
  // .max(16, 'Невірний формат телефону. Правильний формат: +380#########')
  // .matches(
  //   /^\+380\d{2}\d{3}\d{4}$/,
  //   'Невірний формат номеру. Приклад: +380#########'
  // ),
  shippingAdress: Yup.string().required(),
  shippingAdress2: Yup.string(),
  country: Yup.string()
    .notOneOf(['Choose a country'], 'You must select a country')
    .required('Country is required'),
  city: Yup.string()
    .notOneOf(['Choose a city'], 'You must select a city')
    .required('City is required')
})
