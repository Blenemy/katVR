import { HTMLAttributes, ChangeEventHandler, ChangeEvent, memo } from 'react'
import cn from 'classnames'

import './CustomInput.scss'

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string
  type: string
  required: boolean
  value?: string | undefined | number
  inputType?: 'text' | 'card-number' | 'expiration-date'
  onChangeFunc?: ChangeEventHandler<HTMLInputElement>
  id: string
  label: string
  classname?: string
  error?: string | false | undefined
}

export const CustomInput: React.FC<CustomInputProps> = memo(
  ({
    type,
    error = '',
    value,
    onChangeFunc,
    name,
    id,
    label,
    required,
    classname = '',
    inputType = 'text',
    ...props
  }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (inputType === 'expiration-date') {
        let { value } = event.target
        const numbersOnly = value.replace(/[^\d]/g, '')
        const month = numbersOnly.substring(0, 2)
        const year = numbersOnly.substring(2, 4)

        value = month + (month.length === 2 ? ' / ' : '') + year

        event.target.value = value

        if (onChangeFunc) onChangeFunc(event)
      } else {
        if (onChangeFunc) onChangeFunc(event)
      }
    }

    return (
      <article className={`custom-input ${classname}`}>
        <label
          className={cn('custom-input__label', {
            'error-label': error
          })}
          htmlFor={id}
        >
          {error ? `${error}` : required ? `${label}*` : label}
        </label>
        <input
          name={name}
          type={type}
          className={cn('custom-input__field', {
            'error-input': error
          })}
          required={required}
          value={value}
          onChange={handleChange}
          autoComplete="off"
          id={id}
          {...props}
        />
      </article>
    )
  }
)
