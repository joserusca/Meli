// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import meliReducer from '../features/meli/meliSlice';

export const store = configureStore({
  reducer: {
    meli: meliReducer,
  },
});