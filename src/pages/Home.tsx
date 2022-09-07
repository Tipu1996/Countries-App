import Header from '../components/Header'
import Table from '../components/Table'
import React, { useState } from 'react'
import Details from './Details'
import { Route, Routes } from 'react-router-dom'

export const Home = () => {
  const [searchString, setSearchString] = useState<string>('')

  function handleCountryNameFilter(name: string) {
    name && setSearchString(name)
  }

  return (
    <>
      <Header handleCountryNameFilter={handleCountryNameFilter} />
      <Routes>
        <Route path="/" element={<Table searchString={searchString} />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </>
  )
}
