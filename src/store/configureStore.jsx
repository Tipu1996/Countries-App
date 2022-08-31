import { configureStore } from '@reduxjs/toolkit'
import countries from './countries'


const store = configureStore({
    reducer: countries,
    // middleware: [...getDefaultMiddleware(), api],
})
export default store