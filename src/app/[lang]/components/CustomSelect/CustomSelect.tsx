'use client'

import { useState } from 'react'
import './CustomSelect.scss'

const OPTIONS = ['1', '2', '3', '4']

export const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('1')

  const handleOptionClick = (value: any) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  return (
    <div className="custom-select-container">
      <label htmlFor="custom-select" className="custom-select-label">
        Quantity
      </label>
      <div className="custom-select-wrapper" onClick={() => setIsOpen(!isOpen)}>
        <div className="custom-select-display">
          {selectedValue} <span className="custom-select-arrow">&#9660;</span>
        </div>
        {isOpen && (
          <div className="custom-select__options">
            {OPTIONS.map((value) => (
              <div
                key={value}
                className="custom-select__option"
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
