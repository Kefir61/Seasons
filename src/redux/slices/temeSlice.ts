import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit'

interface TemeSliceState {
     teme: string;
     title: number
}

const initialState: TemeSliceState = {
     teme: '',
     title: 0,
}

export const temeSlice = createSlice({
     name: 'teme',
     initialState,
     reducers: {
          setTeme(state, action) {
               state.teme = action.payload
          },
          setTitle(state, action) {
               state.title = action.payload
          }
     }
})
export const selectTeme = (state: RootState) => state.teme
export const { setTeme, setTitle } = temeSlice.actions

export default temeSlice.reducer