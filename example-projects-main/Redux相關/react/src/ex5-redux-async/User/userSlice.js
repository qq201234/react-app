import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 1. 決定state初始值
// {
//   users: []
//   // Multiple possible status enum values
//   status: 'idle' | 'loading' | 'succeeded' | 'failed',
//   error: string | null
// }
const initialState = { users: [], status: 'idle', error: null }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // 一般的reducer
  reducers: {
    changeName: (state, action) => {
      const user = state.users.find((v) => v.id == action.payload.userId)
      user.name = action.payload.name
    },
    changeCity: (state, action) => {
      const user = state.users.find((v) => v.id == action.payload.userId)
      user.address.country.city = action.payload.city
    },
  },
  // thunk reducer
  // Add reducers for additional action types here, and handle loading state as needed
  // 注意: builer使用的是連鎖語法
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.users = []
        state.users.push(action.payload)
      })
      .addCase(fetchAddUser.fulfilled, (state, action) => {
        // payload is response.data
        state.users.push(action.payload)
      })
      .addCase(fetchUpdateUserById.fulfilled, (state, action) => {
        const index = state.users.findIndex((v) => v.id === action.payload.id)
        // payload is response.data
        state.users[index] = action.payload
      })
  },
})

// Return a fulfilled promise containing the final dispatched action
//  (either the fulfilled or rejected action object)
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get('/users')
  // payload will this return value
  return response.data
})

export const fetchAddUser = createAsyncThunk(
  'user/fetchAddUser',
  async (user) => {
    const response = await axios.post('/users', user)
    return response.data
  }
)

export const fetchUpdateUserById = createAsyncThunk(
  'user/fetchUpdateUserById',
  async (user) => {
    const response = await axios.put(`/users/${user.id}`, user)
    return response.data
  }
)

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId, thunkAPI) => {
    const response = await axios.get(`/users/${userId}`)
    return response.data
  }
)

// Action creators are generated for each case reducer function
export const { changeName, changeCity } = userSlice.actions

export default userSlice.reducer
