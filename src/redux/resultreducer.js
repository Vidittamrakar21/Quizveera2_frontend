import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name: 'userresult',
    initialState: {
        usermail: null,
        result: []
    },

    reducers: {
        setuesermail: (state,action) =>{
            state.usermail = action.payload;
        }
    }
})

export const {setuesermail} = resultReducer.actions;

export default resultReducer.reducer;