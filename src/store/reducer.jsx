import { combineReducers } from '@reduxjs/toolkit'
import countries from './countries'
import cart from "./cart"

export default combineReducers({
    countries,
    cart
})