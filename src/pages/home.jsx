import Header from '../components/Header'
import Table from '../components/Table'
import React, { useState } from 'react';
import Details from './Details';
import { Route, Routes } from 'react-router-dom'

export const Home = () => {

    const [searchString, setSearchString] = useState("");

    function handleCountryNameFilter(name) {
        name && setSearchString(name);
    }

    return (
        <>
            <Header textChangeHandler={handleCountryNameFilter} />
            <Routes>
                <Route exact path="/" element={<Table searchString={searchString} />} />
                <Route path="/Details" element={<Details />} />
            </Routes>
        </>
    )
}