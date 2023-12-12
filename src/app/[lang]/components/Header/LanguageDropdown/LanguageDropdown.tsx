'use client'

import { ChangeEvent, useState } from 'react'
import './LanguageDropdown.scss'
import { useParams, useRouter } from 'next/navigation'

export const LanguageDropdown = () => {
  const router = useRouter()
  const params = useParams()
  const [selectedOption, setSelectedOption] = useState(params.lang)

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
    router.push(`/${e.target.value}`)
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
