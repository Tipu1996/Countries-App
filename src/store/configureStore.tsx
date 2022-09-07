import { configureStore } from '@reduxjs/toolkit'
// import countries from './countries'
// import cart from "./cart"
import reducer from './reducer'

const store = configureStore({
  reducer,
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
