import { createSlice } from '@reduxjs/toolkit'

// 1. 決定state初始值
const initialState = {
  id: '1',
  name: 'Eddy',
  address: {
    country: {
      city: 'New Taipei City',
    },
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload.name
    },
    changeCity: (state, action) => {
      state.address.country.city = action.payload.city
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName, changeCity } = userSlice.actions

export default userSlice.reducer
