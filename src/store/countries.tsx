import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country } from '../types'

export interface countriesState {
  list: Country[]
  status: string
  sortName: boolean
  sortPopulation: boolean
  sortRegion: boolean
}

const initialState: countriesState = {
  list: [],
  status: '',
  sortName: false,
  sortPopulation: false,
  sortRegion: false,
}

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    return axios
      .get(
        'https://restcountries.com/v3.1/all?fields=name,languages,capital,flag,population,region'
      )
      .then((response) => response.data)
  }
)

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    sortCountryName: (state, action) => {
      const list = action.payload
      if (!state.sortName) {
        const sortedCountries = [...list].sort((a, b) =>
          a.name.common > b.name.common ? 1 : -1
        )
        state.sortName = true
        state.list = sortedCountries
      } else {
        const sortedCountries = [...list].sort((a, b) =>
          a.name.common > b.name.common ? -1 : 1
        )
        state.sortName = false
        state.list = sortedCountries
      }
    },

    sortCountryPopulaion: (state, action) => {
      const list = action.payload
      if (!state.sortPopulation) {
        const sortedCountries = [...list].sort((a, b) =>
          a.population > b.population ? 1 : -1
        )
        state.sortPopulation = true
        state.list = sortedCountries
      } else {
        const sortedCountries = [...list].sort((a, b) =>
          a.population > b.population ? -1 : 1
        )
        state.sortPopulation = false
        state.list = sortedCountries
      }
    },

    sortCountryRegion: (state, action) => {
      if (!state.sortRegion) {
        const list = action.payload
        const sortedCountries = [...list].sort((a, b) =>
          a.region > b.region ? 1 : -1
        )
        state.sortRegion = true
        state.list = sortedCountries
      } else {
        const list = action.payload
        const sortedCountries = [...list].sort((a, b) =>
          a.region > b.region ? -1 : 1
        )
        state.sortRegion = false
        state.list = sortedCountries
      }
    },
  },
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

export const { sortCountryName, sortCountryPopulaion, sortCountryRegion } =
  slice.actions

export default slice.reducer
