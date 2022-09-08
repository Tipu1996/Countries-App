import Header from '../components/Header'
import Table from '../components/Table'
import Details from './Details'
import { Route, Routes } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </>
  )
}
