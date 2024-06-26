import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal-slice'


export const store = configureStore({
  reducer: {
    modalState: modalReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch