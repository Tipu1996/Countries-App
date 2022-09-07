import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country } from '../types'

export interface countriesState {
  list: Country[]
  status: string
}

const initialState: countriesState = {
  list: [],
  status: '',
}

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    return axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => response.data)
  }
)

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.list = action.payload
      state.status = 'success'
    })
    builder.addCase(getCountries.rejected, (state) => {
      console.log('Something went wrong')
      state.status = 'failed'
    })
  },
})

export default slice.reducer
