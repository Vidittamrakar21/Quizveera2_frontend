import React, { useState,useContext,useRef } from 'react';
import checkcontext from '../../context/quizdata/checkcontext';
import './join.css';
import axios from 'axios';

function Join(){
    const a = useContext(checkcontext);
   const [isvalid, setvalid] = useState(true);
   const [istrue, settrue] = useState(true);

   const joinquiz = async () =>{
    const quiz = await(await axios.get(`/api/quiz/${joinkey.current.value}`)).data
  

    try {
        if(quiz){
            console.log(quiz);
            const joincode = JSON.stringify(quiz.joincode);

            if(quiz.message){
                alert(quiz.message);
            }

           else if (joincode === joinkey.current.value ){
                a.startq();
                a.putkey(joinkey.current.value);
            }
            else{
                setvalid(false);
            }
        }

        else{
            setvalid(false);
        }
        
    } catch (error) {
        console.log(error);
    }
    
    
   }

   const joinkey = useRef();

    const check = (e) =>{
        if(e.target.value === ""){
           setvalid(false);
           
        }
      
        else{
            setvalid(true);
            settrue(false);
        }
    };

   function hell(){
    if(isvalid === true && istrue === true){
        setvalid(false);
    }

    else if(istrue === false && isvalid === true){
        setvalid(true);
        // a.startq();
        joinquiz();
    }
    
   }

    return (
        <div className={`box ${isvalid=== false ? "invalid" : "" }`}>
             <div className="code">
               <input type="number" placeholder="Enter a join code" id="num"  onChange={check} ref={joinkey}/>
               <button id="uu" onClick={hell}>Join</button>
            </div>
            <h4>{!isvalid ? "Please enter a valid quiz code." : "" }</h4>
        </div>
        
    );
}

export default Join;