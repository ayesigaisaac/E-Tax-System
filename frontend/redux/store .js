// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';

// Import your slices here as you create them
// import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    // Register your reducers here
    // auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});