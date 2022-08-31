import React from 'react'
//import ThemeSideBar from './ThemeSideBar'
import SearchBar from './SearchBar'
import Cart from './Cart'
import ThemeBar from './ThemeBar'

const Header = () => {
    return (
        <div className="header">
            <ThemeBar />
            <SearchBar />
            <Cart />
        </div>
    )
}

export default Header
