import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterSliceState {
     type: string;
     page: number;
}

const initialState: FilterSliceState = {
     type: '',
     page: 1,
}

export const filterSlice = createSlice({
     name: 'filter',
     initialState,
     reducers: {
          setType(state, action: PayloadAction<string>) {
               state.type = action.payload
          },
          setPage(state, action: PayloadAction<number>) {
               state.page = action.payload
          }
     },
})

export const selectFilter = (state: RootState) => state.filter
export const { setType, setPage } = filterSlice.actions

export default filterSlice.reducer