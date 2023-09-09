import * as Action from '../redux/buildquesReducer'

export const pushQuestion = (ques) => async(dispatch) => {
    try {
        await dispatch(Action.setques(ques))
    } catch (error) {
        console.log(error)
    }
}

export const pushoptionA = (optA) => async(dispatch) => {
    try {
        await dispatch(Action.setoptA(optA))
    } catch (error) {
        console.log(error)
    }
}

export const pushoptionB = (optB) => async(dispatch) => {
    try {
        await dispatch(Action.setoptB(optB))
    } catch (error) {
        console.log(error)
    }
}
export const pushoptionC = (optC) => async(dispatch) => {
    try {
        await dispatch(Action.setoptC(optC))
    } catch (error) {
        console.log(error)
    }
}
export const pushoptionD = (optD) => async(dispatch) => {
    try {
        await dispatch(Action.setoptD(optD))
    } catch (error) {
        console.log(error)
    }
}

export const pushcorrect = (correct) => async(dispatch) => {
    try {
        await dispatch(Action.setcorrect(correct))
    } catch (error) {
        console.log(error)
    }
}

export const setquizname = (name) => async(dispatch) => {
    try {
        await dispatch(Action.setquizname(name))
    } catch (error) {
        console.log(error)
    }
}

export const settime = (time) => async(dispatch) => {
    try {
        await dispatch(Action.setimer(time))
    } catch (error) {
        console.log(error)
    }
}

export const setcode = (code) => async(dispatch) => {
    try {
        await dispatch(Action.setcode(code))
    } catch (error) {
        console.log(error)
    }
}

