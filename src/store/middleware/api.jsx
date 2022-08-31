//import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as actions from "../api"

/*
const fetchCountries = createAsyncThunk(
    'users/fetchAllCountries',
    async (url, thunkAPI) => {
        const response = await axios.request({ url })
        return response.data
    }
)
export default fetchCountries;
*/
const api =
    ({ dispatch }) =>
        (next) =>
            async (action) => {
                if (action.type !== actions.apiCallBegan.type) return next(action)

                next(action)

                const { url, onSuccess, onError } = action.payload

                try {
                    const response = await axios.request({
                        url,
                    })
                    dispatch(actions.apiCallSuccess(response.data))
                    if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
                } catch (error) {
                    dispatch(actions.apiCallFailed(error.message))
                    if (onError) dispatch({ type: onError, payload: error })
                }
            }

export default api