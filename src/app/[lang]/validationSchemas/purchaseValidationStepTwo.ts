import * as Yup from 'yup'

export const purchaseValidationStepTwo = Yup.object({
  'Card Holder Name': Yup.string().required(),
  'Last Name': Yup.string().required(),
  Email: Yup.string()
    // .matches(/^[a-zA-Z0-9._-]+@([a-zA-Z]+[-])*[a-zA-Z]+(\.[a-zA-Z]{2,4})+$/)
    .required(),
  PhoneNumber: Yup.string().required(),
  // .max(16, 'Невірний формат телефону. Правильний формат: +380#########')
  // .matches(
  //   /^\+380\d{2}\d{3}\d{4}$/,
  //   'Невірний формат номеру. Приклад: +380#########'
  // ),
  'Shipping Adress': Yup.string().required(),
  'Shipping Adress 2': Yup.string(),
  country: Yup.string()
    .notOneOf(['Choose a country'], 'You must select a country')
    .required('Country is required'),
  city: Yup.string()
    .notOneOf(['Choose a city'], 'You must select a city')
    .required('City is required')
})
