import React from 'react'
import { HiSearch } from 'react-icons/hi'

const SearchBar = (props) => {

    let text = "";

    return (
        <form action="">
            <input type="text" name="" id="" onChange={x => text = x.target.value} />
            <HiSearch fontSize={'1.5em'} />
            <input type="button" value="Submit" onClick={() => { props.textChangeHandler(text) }} />
        </form>
    )
}

export default SearchBar
