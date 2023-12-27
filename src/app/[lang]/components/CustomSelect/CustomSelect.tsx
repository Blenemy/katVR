'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import arrowBlue from '../../../../../public/icons/arrow-more-blue.svg'
import arrowWhite from '../../../../../public/icons/arrow-more-white.svg'

import { useOutsideClick } from '../../hooks/useOutsideClick'

import './CustomSelect.scss'

interface CustomSelectProps {
  options: string[]
  variant: 'price' | 'formField'
  label: string
  name: string
  onChangeFunc: (value: string) => void
  value: string | number
  error?: string | boolean
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  variant,
  label = 'Quantity',
  name,
  onChangeFunc,
  value,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value)

  const wrapperRef = useRef<HTMLDivElement>(null)
  useOutsideClick(wrapperRef, () => setIsOpen(false))

  const handleOptionClick = (payloadValue: string) => {
    setSelectedValue(payloadValue)
    setIsOpen(false)

    if (onChangeFunc) {
      onChangeFunc(payloadValue)
    }
  }

  return (
    <div className="custom-select" ref={wrapperRef}>
      <label htmlFor={name} className="custom-select__label">
        {label}
      </label>
      <div
        className="custom-select__wrapper"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={cn('custom-select__display', {
            'formField formField__padding': variant === 'formField'
          })}
        >
          {selectedValue}{' '}
          <Image
            className="custom-select__arrow"
            src={isOpen ? arrowWhite : arrowBlue}
            alt="arrow"
          />
        </div>
        {isOpen && (
          <div
            className={cn('custom-select__options', {
              formField: variant === 'formField'
            })}
          >
            {options.map((optionValue) => (
              <div
                key={optionValue}
                className={cn('custom-select__option', {
                  'formField formField__padding': variant === 'formField'
                })}
                onClick={() => handleOptionClick(optionValue)}
              >
                {optionValue}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <div className="custom-select__error">{error}</div>}
    </div>
  )
}
