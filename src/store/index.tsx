import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './auth';
import counterSliceReducer from './counter';

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
