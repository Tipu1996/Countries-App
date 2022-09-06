import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchBar from './SearchBar'
import Cart from './Cart'
import CartPage from "../pages/CartPage"
import ThemeBar from './ThemeBar'

const Header = (props) => {
    return (
        <div>
            <div className="header">
                <ThemeBar />
                <SearchBar textChangeHandler={props.textChangeHandler} />
                <Cart />
            </div>
            <Routes>
                <Route path="/CartPage" element={<CartPage />} />
            </Routes>
        </div>
    )
}

export default Header
