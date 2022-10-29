import { configureStore } from '@reduxjs/toolkit'
import temeReducer from './slices/temeSlice'
import menuReducer from './slices/menuSlice'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
import filterReducer from './slices/filterSlice'
import { useDispatch } from 'react-redux';
export const store = configureStore({
     reducer: {
          teme: temeReducer,
          menu: menuReducer,
          cart: cartReducer,
          filter: filterReducer,
          user: userReducer
     },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store