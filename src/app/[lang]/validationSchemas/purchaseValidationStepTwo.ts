import * as Yup from 'yup'

const segmentValidator = Yup.string()
  .matches(/^\d{1,4}$/, 'Each segment must be 1 to 4 digits')
  .required('Each segment is required')

export const purchaseValidationStepTwo = Yup.object({
  cardHolder: Yup.string()
    .required()
    .min(3, 'Cardholders name should be at least 3 characters'),
  cardNumber: Yup.array()
    .of(segmentValidator)
    .length(4, 'Card number must have exactly 4 segments'),
  expirationDate: Yup.string().required(),
  CVV: Yup.string()
    .required()
    .min(3, 'At least 3 characters')
    .max(3, 'Maximum 3 characters')
})
