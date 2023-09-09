
import * as Action from '../redux/quesReducer'
import { useDispatch } from 'react-redux'



import axios from 'axios'


    const  Startq = async ()=>{
        const dispatch = useDispatch();
    const [{buildq , optionA , optionB, optionC, optionD, correct}] = await(await axios.get('http://localhost:8080/api/quiz/')).data[0]

    dispatch(Action.startquiz({qq: buildq, A: optionA, B: optionB,C:optionC, D:optionD, right:correct}));

    
}


Startq();

