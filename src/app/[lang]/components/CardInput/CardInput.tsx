'use client'

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import cn from 'classnames'

import './CardInput.scss'

interface CardInputProps {
  required: boolean
  error?: string | false | undefined
  label: string
}

export const CardInput: React.FC<CardInputProps> = ({
  required,
  error,
  label
}) => {
  const [cardNumber, setCardNumber] = useState(['', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleInputChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newCardNumber = [...cardNumber]
      newCardNumber[index] = e.target.value
      setCardNumber(newCardNumber)

      if (e.target.value.length === 4 && index < 3) {
        inputRefs.current[index + 1]?.focus()
      }
    }

  const handleKeyDown =
    (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && cardNumber[index] === '') {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus()
        }
      }
    }

  return (
    <div className="card-input">
      <p className="card-input__label">
        {label}
        {required ? '*' : ''}
      </p>
      <div className="card-input__container">
        {cardNumber.map((num, index) => (
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
      </div>
    </div>
  )
}
