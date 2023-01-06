import { configureStore } from '@reduxjs/toolkit'

import userReducer from './User/userSlice'
import counterReducer from './CounterTwo/counterTwoSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
})
