import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 25656485,
}

export const bankinfoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    withdraw1: (state) => {
     state.value -= 10000
    },
    withdraw2: (state) => {
      state.value -= 5000
    },
    
  },
})

export const { withdraw1, withdraw2 } = bankinfoSlice.actions

export default bankinfoSlice.reducer