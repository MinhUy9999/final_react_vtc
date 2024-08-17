import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils/utils';

const initialState = {
  user: getLocalStorage('userData'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleGetValueUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { handleGetValueUserData } = userSlice.actions;

export default userSlice.reducer;
