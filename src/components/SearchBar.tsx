import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { SearchHandler } from '../types'

const SearchBar = (props: SearchHandler) => {
  let text = ''

  return (
    <form action="">
      <input
        type="text"
        name=""
        id=""
        onChange={(x) => (text = x.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          props.handleCountryNameFilter(text)
        }}
      >
        <HiSearch fontSize={'1.5em'} />
      </button>
    </form>
  )
}

export default SearchBar
