import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import langReducer from './langSlice';

export const store = configureStore({
  reducer: {
    themeStore: themeReducer,
    langStore: langReducer
  },
});