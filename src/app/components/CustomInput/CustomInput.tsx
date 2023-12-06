import { HTMLAttributes, ChangeEventHandler } from 'react'
import cn from 'classnames'
import './CustomInput.scss'

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string
  type: string
  required: boolean
  value?: string | undefined | number
  onChangeFunc?: ChangeEventHandler<HTMLInputElement>
  id: string
  label: string
  error?: string
}

export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  error = '',
  value,
  onChangeFunc,
  name,
  id,
  label,
  required,
  ...props
}) => {
  return (
    <article className="custom-input">
      <label
        className={cn('custom-input__label', {
          'error-label': error
        })}
        htmlFor={id}
      >
        {error ? `Please, fill your ${label}*` : required ? `${label}*` : label}
      </label>
      <input
        name={name}
        type={type}
        className={cn('custom-input__field', {
          'error-input': error
        })}
        required={required}
        value={value}
        onChange={onChangeFunc}
        autoComplete="off"
        id={id}
        {...props}
      />
    </article>
  )
}
