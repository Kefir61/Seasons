import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type CartItemType = {
     id: number;
     name: string;
     ingridients: string;
     price: number;
     count: number;
     type: string;
     imageUrl: string;
     weight: number;
}

interface CartSliceState {
     items: CartItemType[];
     totalPrice: number;
     totalCount: number;
}
const initialState: CartSliceState = {
     items: [],
     totalCount: 0,
     totalPrice: 0,
}

export const cartSlice = createSlice({
     name: 'cart',
     initialState,
     reducers: {
          addProduct(state, action: PayloadAction<CartItemType>) {
               const newItem = state.items.find((obj) => obj.id == action.payload.id)

               if (newItem) {
                    newItem.count++
               } else {
                    state.items.push({
                         ...action.payload,
                         count: 1
                    })
               }
               state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0)
               state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0)
          },
          minusProduct(state, action: PayloadAction<number>) {
               const newItem = state.items.find((obj) => obj.id == action.payload)

               if (newItem && newItem.count > 0) {
                    newItem.count--
                    if (newItem.count == 0) {
                         state.items = state.items.filter((obj) => obj.id !== action.payload)
                    }
                    state.totalPrice -= newItem.price
                    state.totalCount--
               }
          },
          removeProduct(state, action: PayloadAction<number>) {
               const findItem = state.items.find((obj) => obj.id == action.payload)
               state.items = state.items.filter((obj) => obj.id !== action.payload)
               if (findItem) {
                    state.totalCount -= findItem.count
                    state.totalPrice -= findItem.price * findItem.count
               }
          },

     },
})

export const selectCart = (state: RootState) => state.cart;
export const selectCartId = (id: number) => (state: RootState) => state.cart.items.find((obj) => obj.id == id)
export const { removeProduct, minusProduct, addProduct } = cartSlice.actions

export default cartSlice.reducer