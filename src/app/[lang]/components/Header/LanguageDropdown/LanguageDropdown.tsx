'use client'

import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageDropdown.scss'

export const LanguageDropdown = () => {
  const { i18n } = useTranslation()
  const [selectedOption, setSelectedOption] = useState('En')

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // setSelectedOption(e.target.value)
    // i18n.changeLanguage(e.target.value)
    // console.log(i18n)
  }

  return (
    <select
      value={selectedOption}
      onChange={(e) => handleOnChange(e)}
      className="language-dropdown"
    >
      <option className="language-dropdown__option" value="en">
        En
      </option>
      <option className="language-dropdown__option" value="de">
        Ge
      </option>
    </select>
  )
}
