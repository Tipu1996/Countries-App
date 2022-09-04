import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'countries',
    initialState: { list: [] },
    reducers: {
        addCountry: (state, action) => {
            state.list.push(action.payload)
        },
        removeCountry: (state, action) => {

        }
    }
})

export const { addCountry, removeCountry } = cartSlice.actions
export default cartSlice.reducer