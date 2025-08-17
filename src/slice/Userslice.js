import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: localStorage.getItem("userlogInfo") ? JSON.parse(localStorage.getItem("userlogInfo")) :
    null
  },
  reducers: {
    userlogInfo: (state,actions) => {
     
        console.log(state);
        console.log(actions);
        state.value=actions.payload
        
        
    },
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const {userlogInfo } = userSlice.actions

export default userSlice.reducer