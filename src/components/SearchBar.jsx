import React from 'react'
import { HiSearch } from 'react-icons/hi'

const SearchBar = (props) => {

    let text = "";

    return (
        <form action="">
            <input type="text" name="" id="" onChange={x => text = x.target.value} />
            <button type='submit' onClick={e => { e.preventDefault(); props.textChangeHandler(text) }}><HiSearch fontSize={'1.5em'} /></button>
        </form>
    )
}

export default SearchBar
