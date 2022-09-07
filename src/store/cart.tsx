import { createSlice } from '@reduxjs/toolkit'

import { Country } from '../types'

export interface countriesState {
  cart: Country[]
}

const initialState: countriesState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addedToCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (x) => x.name.common === payload.name.common
      )
      index === -1 ? state.cart.push(payload) : console.log('already added')
    },
    removedFromCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (x) => x.name.common === payload.name.common
      )
      state.cart.splice(index, 1)
    },
  },
})

export const { addedToCart, removedFromCart } = cartSlice.actions
export default cartSlice.reducer
