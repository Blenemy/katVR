import * as Yup from 'yup'

export const purchaseValidationStepTwo = Yup.object({
  'Card Holder Name': Yup.string().required(),
  cardNumber: Yup.string().required(),
  'Expiration Date': Yup.string().required(),
  CVV: Yup.string().required()
})
