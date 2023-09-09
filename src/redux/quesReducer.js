import { createSlice } from "@reduxjs/toolkit";

export const quesReducer = createSlice({
    name: "quizques",
    initialState: {
        buildq: [],
        optionA: [],
        optionB: [],
        optionC: [],
        optionD: [],
        correct: [],
        timer: null,
        joincode: null,
        count: 0
    },

    reducers : {
        setimer: (state,action) =>{
            state.timer = action.payload;
        },

        setcode: (state,action) =>{
            state.joincode = action.payload;
        },

        startquiz: (state, action) =>{
            let {qq ,A ,B,C,D,right} = action.payload; 
            return {
                ...state,
                buildq : qq,
                optionA: A,
                optionB: B,
                optionC: C,
                optionD: D,
                correct: right
            }
        }
    }
})

export const {setimer,setcode, startquiz} = quesReducer.actions;

export default quesReducer.reducer;