import Header from '../components/Header'
import Table from '../components/Table'
import React, { useState } from 'react';

export const Home = () => {
    const [searchString, setSearchString] = useState("");
    function handleCountryNameFilter(name) {
        name && setSearchString(name);
    }
    return (
        <>
            <Header textChangeHandler={handleCountryNameFilter} />
            <Table searchString={searchString} />
        </>
    )
}