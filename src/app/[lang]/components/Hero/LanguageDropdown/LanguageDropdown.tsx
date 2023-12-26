'use client'

import { ChangeEvent, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'

import arrowBlue from '../../../../../../public/icons/arrow-more-blue.svg'
import arrowWhite from '../../../../../../public/icons/arrow-more-white.svg'

import './LanguageDropdown.scss'

export const LanguageDropdown = () => {
  const router = useRouter()
  const params = useParams()
  const [selectedOption, setSelectedOption] = useState(params.lang)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentLnaguage = e.target.value

    setSelectedOption(currentLnaguage)
    router.push(`/${currentLnaguage}`)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className="language-dropdown">
      <select
        value={selectedOption}
        onChange={handleOnChange}
        onClick={toggleDropdown}
        onBlur={() => setDropdownOpen(false)}
        className="language-dropdown__select"
      >
        <option className="language-dropdown__option" value="en">
          En
        </option>
        <option className="language-dropdown__option" value="de">
          Ge
        </option>
        <option className="language-dropdown__option" value="esp">
          Esp
        </option>
        <option className="language-dropdown__option" value="fr">
          Fr
        </option>
      </select>
      <Image
        src={dropdownOpen ? arrowWhite : arrowBlue}
        alt="arrowBlue"
        className="language-dropdown__arrow-more"
      />
    </div>
  )
}
