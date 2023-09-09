import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name:'createuser',
    initialState:{
        email: null,
        password: null,
        username: null
    },

    reducers: {
        setemail: (state,action) =>{
            state.email = action.payload;
        }
    }
})

export const {setemail} = userReducer.actions;
export default userReducer.reducer;