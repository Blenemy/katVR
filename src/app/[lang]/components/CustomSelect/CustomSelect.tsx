'use client'

import { useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import arrowBlue from '../../../../../public/icons/arrow-more-blue.svg'
import arrowWhite from '../../../../../public/icons/arrow-more-white.svg'

import './CustomSelect.scss'

interface CustomSelectProps {
  options: string[]
  variant: 'price' | 'formField'
  label?: string
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  variant,
  label = 'Quantity'
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('1')

  const handleOptionClick = (value: any) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  return (
    <div className="custom-select">
      <label htmlFor="custom-select" className="custom-select__label">
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
            {options.map((value) => (
              <div
                key={value}
                className={cn('custom-select__option', {
                  'formField formField__padding': variant === 'formField'
                })}
                onClick={() => handleOptionClick(value)}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
