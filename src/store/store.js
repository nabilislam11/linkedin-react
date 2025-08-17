import { configureStore } from '@reduxjs/toolkit'
import { userlogInfo } from '../slice/Userslice'
import userReducer from '../slice/Userslice'
export const store= configureStore({
  reducer: {
    userlogInfo :userReducer,
  }
})

