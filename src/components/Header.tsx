import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchBar from './SearchBar'
import Cart from './Cart'
import CartPage from '../pages/CartPage'
// import ThemeBar from './ThemeBar'
import { SearchHandler } from '../types'

const Header = (props: SearchHandler) => {
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <ThemeBar />
                </li> */}
                <li className="nav-item">
                  <SearchBar
                    handleCountryNameFilter={props.handleCountryNameFilter}
                  />
                </li>
                <li className="nav-item">
                  <Cart />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default Header
