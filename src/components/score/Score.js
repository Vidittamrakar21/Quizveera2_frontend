import axios from 'axios';
import './score.css';
import { useEffect,useState,useContext } from 'react';
import checkcontext from '../../context/quizdata/checkcontext';


function Score (){

    const a = useContext(checkcontext);

    const [isdata, setdata] = useState([]);

    const callgiven = async () =>{
        const build = await(await axios.get('/api/user/:mail')).data;
        if(build.message){
          alert(build.message);
        }
        else{
          const qdata = build.qgiven;
          setdata(qdata);
        }
       
  
      }
  
      useEffect(()=>{
        callgiven();
      },[])

    // useEffect(async ()=>{
    //     const quiz = await(await axios.get('/api/user/:mail')).data;
    //     if(quiz){
    //         setdata(quiz);
    //         console.log(isdata);
    //     }
       
    //  })

    let score = [isdata];



    return (
        <div id='oop'>
             <div id="userA">
            <div id="userimgA">
                <img src="images/pro.jpg" alt="" />
            </div>
            <div id='usernameA'>
                <h3>{a.name? a.name : "User"}</h3>
            </div>
        </div>

       {score.length === 0 && ( <div id='as'>
             <h1>No score yet!</h1>
        </div>)}

        {isdata.map( (item) => {
            return (
                <div className='marks'>
                <h4>{item.joincode}</h4>
                {/* <h4>{item.date}</h4> */}
                <h4>{item.name}</h4>
                <h4>Score - {item.score}/5</h4>
            </div>
            )
        })}

      
        </div>
    );

}

export default Score;