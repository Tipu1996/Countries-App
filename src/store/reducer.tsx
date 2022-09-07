import { combineReducers } from 'redux'
import countriesReducer from './countries'
import cartReducer from "./cart"

export default combineReducers({
    countries: countriesReducer,
    cart: cartReducer
})