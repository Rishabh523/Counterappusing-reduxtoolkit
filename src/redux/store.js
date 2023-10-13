import { configureStore } from '@reduxjs/toolkit'
import  CounterReducer  from './Slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }, 
})