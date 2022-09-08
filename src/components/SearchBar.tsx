import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/configureStore'
import { handleSearch } from '../store/countries'

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const handleChange = (e: any) => {
    dispatch(handleSearch(e.target.value))
  }
  return (
    <>
      <input type="text" name="" id="" onChange={handleChange} />
    </>
  )
}

export default SearchBar
