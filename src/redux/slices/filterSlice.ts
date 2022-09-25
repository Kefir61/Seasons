import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterSliceState {
     type: string;
     page: number;
     searchValue: string;
}

const initialState: FilterSliceState = {
     searchValue: '',
     type: '',
     page: 1,
}

export const filterSlice = createSlice({
     name: 'filter',
     initialState,
     reducers: {
          setSearchValue(state, action: PayloadAction<string>) {
               state.searchValue = action.payload
          },
          setType(state, action: PayloadAction<string>) {
               state.type = action.payload
          },
          setPage(state, action: PayloadAction<number>) {
               state.page = action.payload
          }
     },
})

export const selectFilter = (state: RootState) => state.filter
export const { setType, setPage, setSearchValue } = filterSlice.actions

export default filterSlice.reducer