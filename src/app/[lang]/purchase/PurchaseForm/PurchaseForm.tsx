import { CustomInput } from '../../components/CustomInput/CustomInput'
import { CustomSelect } from '../../components/CustomSelect/CustomSelect'
import { PriceBar } from '../../components/PriceBar/PriceBar'
import './PurchaseForm.scss'

const OPTIONS = ['1', '2', '3', '4']

export const PurchaseForm = () => {
  return (
    <form className="main-purchase__form form-purchase">
      <div className="form-purchase__content">
        <section className="form-purchase__price">
          <CustomSelect options={OPTIONS} variant="price" />
          <PriceBar />
        </section>
        <section className="form-purchase__fields">
          <CustomInput
            name="First Name"
            type="text"
            required
            id="First Name"
            label="First Name"
          />
          <CustomInput
            name="Last Name"
            type="text"
            required
            id="Last Name"
            label="Last Name"
          />
          <CustomInput
            name="Email"
            type="email"
            required
            id="Email"
            label="Email"
          />
          <CustomInput
            name="PhoneNumber"
            type="tel"
            required
            id="PhoneNumber"
            label="PhoneNumber"
          />
          <CustomSelect
            options={OPTIONS}
            variant="formField"
            label="Country*"
          />
          <CustomSelect options={OPTIONS} variant="formField" label="City*" />
          <CustomInput
            name="Shipping Adress"
            type="text"
            required
            id="Shipping Adress"
            label="Shipping Adress"
          />
          <CustomInput
            name="Shipping Adress 2"
            type="text"
            id="Shipping Adress 2"
            label="Shipping Adress 2"
            required={false}
          />
        </section>
      </div>
    </form>
  )
}
