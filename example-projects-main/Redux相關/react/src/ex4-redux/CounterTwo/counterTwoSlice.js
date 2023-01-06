import { createSlice } from '@reduxjs/toolkit'

const initialState = { total: 0, secondTotal: 1 }

export const counterTwoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTotal: (state) => {
      state.total += 1
    },
    subTotal: (state) => {
      state.total -= 1
    },
    addSecondTotal: (state) => {
      state.secondTotal += 1
    },
    subSecondTotal: (state) => {
      state.secondTotal -= 1
    },
    addSecondTotalAmount: (state, action) => {
      state.secondTotal += action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addTotal,
  subTotal,
  addSecondTotal,
  subSecondTotal,
  addSecondTotalAmount,
} = counterTwoSlice.actions

export default counterTwoSlice.reducer
