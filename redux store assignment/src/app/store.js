import { configureStore } from '@reduxjs/toolkit';
import bankinfoSliceReducer from '../features/Bankinfo/BankinfoSlice';

export const store = configureStore({
  reducer: {
    Withdraw: bankinfoSliceReducer,
  },
});
