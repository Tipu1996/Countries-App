import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getCountries = createAsyncThunk(
    "countries/getCountries",
    async () => {
        return axios.request("https://restcountries.com/v3.1/all").then(response => response.data)
    }
)


const slice = createSlice({
    name: 'countries',
    initialState: { list: [], status: null },

    extraReducers: {
        [getCountries.pending]: (state) => {
            state.status = "loading"
        },
        [getCountries.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = "success"
        },
        [getCountries.rejected]: (state) => {
            state.status = "failed"
        }
    },
})

//export const recoverCountries = ({ countries }) => countries.list

export default slice.reducer