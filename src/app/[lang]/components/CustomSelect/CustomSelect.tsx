'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import arrowBlue from '../../../../../public/icons/arrow-more-blue.svg'
import arrowWhite from '../../../../../public/icons/arrow-more-white.svg'

import './CustomSelect.scss'
import { useOutsideClick } from '../../hooks/useOutsideClick'

interface CustomSelectProps {
  options: string[]
  variant: 'price' | 'formField'
  label?: string
  onChangeFunc: (payload: number) => void
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  variant,
  label = 'Quantity',
  onChangeFunc
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useOutsideClick(wrapperRef, () => setIsOpen(false))

  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(options[0])

  const handleOptionClick = (value: string) => {
    setSelectedValue(value)
    setIsOpen(false)
    onChangeFunc(+value)
  }

  return (
    <div className="custom-select" ref={wrapperRef}>
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
