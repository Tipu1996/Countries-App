import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Country } from '../types'

type LocationState = {
  from: Country
}

const Details = () => {
  const location = useLocation()
  const { from } = location.state as LocationState
  return (
    <>
      <h1>Details of {from.name.common}</h1>
      <p>Official Name: {from.name.official}</p>
      <h4>
        <Link to="/">Go Back</Link>
      </h4>
    </>
  )
}

export default Details
