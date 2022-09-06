import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        addedToCart: (state, { payload }) => {
            const index = state.cart.findIndex(x => x.name.common === payload.name.common);
            index === -1 ? state.cart.push(payload) : console.log("already added")
        },
        removedFromCart: (state, { payload }) => {
            const index = state.cart.findIndex(x => x.name.common === payload.name.common);
            state.cart.splice(index, 1)
        }
    }
})

export const { addedToCart, removedFromCart } = cartSlice.actions
export default cartSlice.reducer