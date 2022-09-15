import { RootState } from './../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';


type FetchMenuArgs = {
     season: string;
     type: string;
     currentPage: number;
}

export type MenuItemType = {
     id: number;
     name: string;
     ingridients: string;
     price: number;
     type: string;
     calories: number;
     imageUrl: string;
     weight: number;
}

export const fetchMenu = createAsyncThunk<MenuItemType[], FetchMenuArgs>('munu/fetchMenuStatus', async (params) => {
     const { season, type, currentPage } = params
     const { data } = await axios.get<MenuItemType[]>(`https://630c9e3453a833c53430193c.mockapi.io/${season}?type=${type}&page=${currentPage}&limit=8`)
     return data;
})

interface MenuSliceState {
     items: MenuItemType[];
     status: string;
}

const initialState: MenuSliceState = {
     items: [],
     status: ''
}

export const menuSlice = createSlice({
     name: 'menu',
     initialState,
     reducers: {
          setItems(state, action: PayloadAction<MenuItemType[]>) {
               state.items = action.payload
          }
     },

     extraReducers: (builder) => {
          builder.addCase(fetchMenu.pending, (state) => {
               state.status = "LOADING";
               state.items = []
          })
          builder.addCase(fetchMenu.fulfilled, (state, action) => {
               state.items = action.payload
               state.status = "SUCCESS"
          })
          builder.addCase(fetchMenu.rejected, (state) => {
               state.status = 'ERROR'
               state.items = []
          })
     }
})
export const selectMenu = (state: RootState) => state.menu;
export const { setItems } = menuSlice.actions

export default menuSlice.reducer