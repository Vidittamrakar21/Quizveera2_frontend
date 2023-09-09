import { createSlice } from "@reduxjs/toolkit";

export const buildquesReducer = createSlice({
    name:'buildquiz',
    initialState:{
        quizname: "",
        buildq: [],
        optionA: [],
        optionB: [],
        optionC: [],
        optionD: [],
        correct: [],
        timer: null,
        joincode: null,
       
    },

    reducers : {
        setimer: (state,action) =>{
            state.timer = action.payload;
        },

        setcode: (state,action) =>{
            state.joincode = action.payload;
        },

        setquizname: (state,action) =>{
            state.quizname = action.payload;
        },

        setques: (state,action) =>{
            state.buildq.push(action.payload)
        },

        setoptA: (state,action) =>{
            state.optionA.push(action.payload)
        },

        setoptB: (state,action) =>{
            state.optionB.push(action.payload)
        },

        setoptC: (state,action) =>{
            state.optionC.push(action.payload)
        },

        setoptD: (state,action) =>{
            state.optionD.push(action.payload)
        },

        setcorrect: (state,action) =>{
            state.correct.push(action.payload)
        }
    }
})

export const {setimer,setcode, setquizname, setques, setoptA,setoptB,setoptC,setoptD,setcorrect} = buildquesReducer.actions;
export default buildquesReducer.reducer;