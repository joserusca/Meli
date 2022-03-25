import { configureStore } from '@reduxjs/toolkit';
import meliReducer from '../features/meli/meliSlice';

export const store = configureStore({
  reducer: {
    meli: meliReducer,
  },
});