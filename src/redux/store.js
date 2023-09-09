import {combineReducers, configureStore} from '@reduxjs/toolkit';
import  quesReducer  from './quesReducer';
import  buildquesReducer  from './buildquesReducer';
import  resultReducer  from './resultreducer';
import userReducer  from './userReducer';

const rootReducer = combineReducers({
    question: quesReducer,
    buildques: buildquesReducer,
    result: resultReducer,
    user: userReducer
})


export default configureStore({reducer: rootReducer});