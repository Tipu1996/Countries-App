import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/countries';
//import { recoverCountries } from '../store/countries';

const Table = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.list)
    console.log(countries)
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    return (
        <div>
            <h1>Printing</h1>
            {countries.map((obj) => <p>{obj.name.common}</p>)}
        </div>
    );
}

export default Table