import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Details = () => {
    const location = useLocation()
    const { from } = location.state
    Object.values(from.languages).map(x => console.log(x))
    return (
        <>
            <h1>Details of {from.name.common}</h1>
            <h3>{Object.values(from.languages).map(x => x)}</h3>
            <h4><Link to="/">Go Back</Link></h4>
        </>
    )
}

export default Details