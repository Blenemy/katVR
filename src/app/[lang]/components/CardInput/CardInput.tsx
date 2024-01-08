'use client'
import Image from 'next/image'

import React, { ChangeEvent, KeyboardEvent, useRef } from 'react'
import cn from 'classnames'

import visaImage from '../../../../../public/icons/visa.svg'

import './CardInput.scss'

interface CardInputProps {
  required: boolean
  error?: string[] | false | undefined | string
  value: string[]
  onChange: (value: string[]) => void
  label: string
}

export const CardInput: React.FC<CardInputProps> = ({
  required,
  error,
  label,
  value,
  onChange
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleInputChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newCardNumber = [...value]
      newCardNumber[index] = e.target.value
      onChange(newCardNumber)

      if (e.target.value.length === 4 && index < 3) {
        inputRefs.current[index + 1]?.focus()
      }
    }

  const handleKeyDown =
    (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && value[index] === '' && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    }

  return (
    <div className="card-input">
      <p className="card-input__label">
        {label}
        {required ? '*' : ''}
      </p>
      <div className="card-input__container">
        {value.map((num, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            placeholder="0000"
            maxLength={4}
            value={num}
            onChange={handleInputChange(index)}
            className={cn('card-input__field', {
              'card-input-error': error
            })}
            onKeyDown={handleKeyDown(index)}
          />
        ))}
        <Image
          alt="visa"
          src={visaImage}
          height={34}
          width={54}
          className="card-input__visa-image"
        />
      </div>
    </div>
  )
}
