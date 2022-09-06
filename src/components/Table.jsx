import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/countries';
import { Link } from 'react-router-dom';
import { addedToCart } from '../store/cart';


const Table = (props) => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries.list);
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        dispatch(getCountries())
        setCountries(allCountries);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    useEffect(() => {
        setCountries(allCountries);
    }, [allCountries])

    useEffect(() => {
        setCountries(allCountries.filter(x => x.name.common.includes(props.searchString)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchString])




    return (
        <div>
            <h1>All the Countries in the World</h1>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Languages</th>
                        <th>Population</th>
                        <th>Region</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) =>
                        <tr key={country.name.common}>
                            <td>{country.flag}</td>
                            <td><Link to="/Details" state={{ from: country }}>{country.name.common}</Link></td>
                            <td><ul>{country.languages ? Object.values(country.languages).map(x => <li key={x}> {x} </li>) : "none"}</ul></td>
                            <td>{country.population}</td>
                            <td>{country.region}</td>
                            <td><button onClick={() => dispatch(addedToCart(country))} >
                                ADD
                            </button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

//country.name.common, country.flag, Object.values(country.languages).map(language => <p>language</p>), country.population 

export default Table