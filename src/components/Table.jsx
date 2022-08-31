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
    }, [dispatch])

    useEffect(() => {
        setCountries(allCountries);
    }, [allCountries])



    useEffect(() => {
        setCountries(allCountries.filter(x => x.name.common.includes(props.searchString)));
    }, [props.searchString])



    return (
        <div>
            <h1>Printing</h1>
            {countries.map((country) => <p>{country.name.common}</p>)}
        </div>
    );
}

export default Table