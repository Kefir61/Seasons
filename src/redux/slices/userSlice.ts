import { MenuItemType } from './menuSlice';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './../store';



interface UserSliceState {
     liked: MenuItemType[];
     email: string;
     token: any;
     id: string;
}

const initialState: UserSliceState = {
     email: '',
     token: null,
     id: '',
     liked: [],
}


const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
          setUser(state, action) {
               state.email = action.payload.email;
               state.id = action.payload.id;
               state.token = action.payload.token;
          },
          removeUser(state) {
               state.email = '';
               state.token = null;
               state.id = '';
          },
          addLikedItem(state, action) {
               state.liked.push(
                    {
                         ...action.payload,
                         isLiked: true
                    })
          }

     }
})
export const selectUser = (state: RootState) => state.user
export const { setUser, removeUser, addLikedItem } = userSlice.actions;

export default userSlice.reducer;