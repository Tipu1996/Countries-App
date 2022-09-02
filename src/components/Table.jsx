import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/countries';

const Table = (props) => {
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.list);
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
            <h1>Printing</h1>
            <table>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Languages</th>
                    <th>Population</th>
                    <th>Region</th>
                </tr>
                <tbody>
                    {countries.map((country) =>
                        <tr>
                            <td>{country.flag}</td>
                            <td>{country.name.common}</td>
                            <td>languages</td>
                            {/* <td>{Object.values(country.languages).map(x => x)}</td> */}
                            <td>{country.population}</td>
                            <td>{country.region}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

//country.name.common, country.flag, Object.values(country.languages).map(language => <p>language</p>), country.population 

export default Table