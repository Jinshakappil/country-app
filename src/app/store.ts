import { configureStore } from '@reduxjs/toolkit';
// import countriesReducer from '../features/countriesSlice';
// import Coun
// import countriesReducer from '../country/country';
import countriesReducer from '../country/country';
export const store = configureStore({
  reducer: {
    countries: countriesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
