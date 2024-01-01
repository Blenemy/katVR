import * as Yup from 'yup'

export const purchaseValidationStepTwo = Yup.object({
  cardHolder: Yup.string().required(),
  expirationDate: Yup.string().required(),
  CVV: Yup.string().required()
})
