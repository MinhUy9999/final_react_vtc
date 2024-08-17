import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import loadingSlice from './slice/loadingSlice';
import initReducer from './slice/initReducer';
export const store = configureStore({
  reducer: {
    userSlice,
    loadingSlice,
    initReducer,
  },
});
