import React from 'react'
//import ThemeSideBar from './ThemeSideBar'
import SearchBar from './SearchBar'
import Cart from './Cart'
import ThemeBar from './ThemeBar'

const Header = (props) => {
    return (
        <div className="header">
            <ThemeBar />
            <SearchBar textChangeHandler={props.textChangeHandler} />
            <Cart />
        </div>
    )
}

export default Header
