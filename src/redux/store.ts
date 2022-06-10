import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-slice';

export const store = configureStore({
  reducer: rootReducer,
})
