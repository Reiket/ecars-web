import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../../../../app/store';
import type {User} from '@ecars/core/types/types';

type UserType = User | null;

interface AuthState {
  user: UserType;
}

const initialState: AuthState = {
  user: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {setCredentials} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState): UserType => state.auth.user;
