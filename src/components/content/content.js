import './content.css';
import { useState,useEffect,useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { pushQuestion,pushoptionA,pushoptionB,pushoptionC,pushoptionD,pushcorrect,setquizname,settime,setcode } from '../../hooks/createquiz';





function Content (props){
   

    const {buildques} = useSelector(state => state) 
    useEffect(()=> {
        console.log(buildques)
    })
 
    const dispatch = useDispatch();

    const quizuser = useRef();
    const qname = useRef();
    const [intial , setvalue]= useState(5);
    const [timer, settimer] = useState(0);


    // const [checkA , checkitA]= useState(true);
    // const [checkB , checkitB]= useState(false);
    // const [checkC , checkitC]= useState(false);
    // const [checkD , checkitD]= useState(false);
    // function handleA (){
    //   checkitA(true);
    //   checkitB(false);
    //   checkitC(false);
    //   checkitD(false);
    //   setvalue(5);
    // }
    // function handleB (){
    //     checkitA(false);
    //     checkitB(true);
    //     checkitC(false);
    //     checkitD(false);
    //     setvalue(7);
      
    // }
    // function handleC (){
    //     checkitA(false);
    //     checkitB(false);
    //     checkitC(true);
    //     checkitD(false);
    //     setvalue(10);
        
    // }
    // function handleD (){
    //     checkitA(false);
    //     checkitB(false);
    //     checkitC(false);
    //     checkitD(true);
    //     setvalue(15);

    // }

    const pushquiz = async () => {
       const quiz = await axios.post('/api/quiz', buildques);
       const data = quiz.data;
      try {
        if(data){
            done(true);
            await axios.post('/api/user/buildq/:mail',{joincode:buildques.joincode, name: buildques.quizname , date: new Date(Date.now())})
        }

        
      } catch (error) {
        console.log(error);
      }
    }

    const [check1 , checkit1]= useState(true);
    const [check2 , checkit2]= useState(false);
    const [check3 , checkit3]= useState(false);
    const [check4 , checkit4]= useState(false);
    function handle1 (){
      checkit1(true);
      checkit2(false);
      checkit3(false);
      checkit4(false);
      settimer(0);
    }
    function handle2 (){
        checkit1(false);
        checkit2(true);
        checkit3(false);
        checkit4(false);
        settimer(30);
    }
    function handle3 (){
        checkit1(false);
        checkit2(false);
        checkit3(true);
        checkit4(false);
        settimer(60);
      
    }
    function handle4 (){
        checkit1(false);
        checkit2(false);
        checkit3(false);
        checkit4(true);
        settimer(90);
    }

    const [isvalid, setvalid] = useState(true);
 
    
    const [showing , show]= useState(true);

   
  async  function hell(){
     if(quizuser.current?.value === "" || qname.current?.value === "" ){
         setvalid(false);
     }
 
     else {

      const quiz = await (await axios.get('/api/quiz/')).data;
      if(quiz.message){
        alert(quiz.message);
      }

      else{

        dispatch(setquizname(qname.current?.value));
        
        setvalid(true);
        show(false);
        
        dispatch(setcode(Math.floor(Math.random()*10000) + 999));
        dispatch(settime(timer));
      }

         
     }


    }

  
    
    const [counter, set] = useState(1);
    
   const question = useRef();
   const optA = useRef();
   const optB = useRef();
   const optC = useRef();
   const optD = useRef();
   const correct = useRef();
    
    const Changeques = () => {
        // let num = Math.floor(Math.random()*10000) + 999
      
       
      if(counter <= intial){
          set(counter + 1);
        dispatch(pushQuestion(question.current?.value));
        dispatch(pushoptionA(optA.current?.value));
        dispatch(pushoptionB(optB.current?.value));
        dispatch(pushoptionC(optC.current?.value));
        dispatch(pushoptionD(optD.current?.value));
        dispatch(pushcorrect(correct.current?.value));
       
      }

      else if(counter === 6){
        // dispatch(pushQuestion(question.current?.value));
        // dispatch(pushoptionA(optA.current?.value));
        // dispatch(pushoptionB(optB.current?.value));
        // dispatch(pushoptionC(optC.current?.value));
        // dispatch(pushoptionD(optD.current?.value));
        // dispatch(pushcorrect(correct.current?.value));
       
       
        set(intial);

        pushquiz();
     
      }

      

     
    }


    const backq = () =>{
        set(counter -1);
    }

   const [succ , done] = useState(false);

    return (
        <div className='jaja'>

        {showing && (
            <div className="content">

            <div id="th">
                <h2>Build A Quiz ..</h2>
            </div>
            <div id="selector">
            <input type="text" placeholder="Enter User Name" className="la" ref={quizuser}/>
            <input type="text" placeholder=" Enter Your Quiz Name " className="la" ref={qname} />
            
            {/* <h4 className="vv">Select Number Of Questions</h4>
            <div id="time">

                <h4>5</h4>
                <input type="radio" checked ={checkA} className="x" onChange={handleA}/>
                
                <h4>7</h4>
                <input type="radio" checked ={checkB} className="x" onChange={handleB}/>

                <h4>10</h4>
                <input type="radio" checked ={checkC} className="x" onChange={handleC}/>
                    <h4>15</h4>
                    <input type="radio"checked ={checkD} className="x" onChange={handleD}/>
                    
                    </div> */}
                    
                    <h4 className="vv">Select Timer</h4>
                    <div id="time">

                    <h4>None</h4>
                    <input type="radio" checked ={check1} className="x" onChange={handle1}/>
                    
                    <h4>30 sec</h4>
                    <input type="radio" checked ={check2} className="x" onChange={handle2}/>
                    
                    <h4>60 sec</h4>
                    <input type="radio" checked ={check3} className="x" onChange={handle3}/>
                    <h4>90 sec</h4>
                    <input type="radio" checked ={check4} className="x" onChange={handle4}/>
                    
                    </div>
                    <h5>{!isvalid ? "Details can't be left empty." : "" }</h5>
                    </div>
                    <button id="start" onClick={hell}>Start Creating</button>
                    </div>
                    )}

                    {!showing && (
                        <div className={`frame ${succ === true ? "hide" : ""}`}>
                            {/* <div className={`prev ${counter === 1 || counter === 6 ? "hide" : ""}`} onClick={backq}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgb(59, 137, 233)" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                 <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                   </svg>
                            </div> */}
                           {counter === 1 && (<div className='veer'>
                            <div id='ruu'><h4>{`Question ${counter}`}</h4></div>
                           <input type="text" placeholder='Enter Question' ref={question} />
                           <input type="text" placeholder='Enter Option A' ref={optA}/>
                           <input type="text" placeholder='Enter Option B'ref={optB}/>
                           <input type="text" placeholder='Enter Option C' ref={optC}/>
                           <input type="text" placeholder='Enter Option D'ref={optD}/>
                           <input type="text" placeholder='Enter Correct Option' ref={correct}/>
                           </div>)}

                           {counter === 2 && (<div className='veer'>
                            <div id='ruu'><h4>{`Question ${counter}`}</h4></div>
                           <input type="text" placeholder='Enter Question' ref={question} />
                           <input type="text" placeholder='Enter Option A' ref={optA}/>
                           <input type="text" placeholder='Enter Option B'ref={optB}/>
                           <input type="text" placeholder='Enter Option C' ref={optC}/>
                           <input type="text" placeholder='Enter Option D'ref={optD}/>
                           <input type="text" placeholder='Enter Correct Option' ref={correct}/>
                           </div>)}

                           {counter === 3 && (<div className='veer'>
                            <div id='ruu'><h4>{`Question ${counter}`}</h4></div>
                           <input type="text" placeholder='Enter Question' ref={question} />
                           <input type="text" placeholder='Enter Option A' ref={optA}/>
                           <input type="text" placeholder='Enter Option B'ref={optB}/>
                           <input type="text" placeholder='Enter Option C' ref={optC}/>
                           <input type="text" placeholder='Enter Option D'ref={optD}/>
                           <input type="text" placeholder='Enter Correct Option' ref={correct}/>
                           </div>)}

                           {counter === 4 && (<div className='veer'>
                            <div id='ruu'><h4>{`Question ${counter}`}</h4></div>
                           <input type="text" placeholder='Enter Question' ref={question} />
                           <input type="text" placeholder='Enter Option A' ref={optA}/>
                           <input type="text" placeholder='Enter Option B'ref={optB}/>
                           <input type="text" placeholder='Enter Option C' ref={optC}/>
                           <input type="text" placeholder='Enter Option D'ref={optD}/>
                           <input type="text" placeholder='Enter Correct Option' ref={correct}/>
                           </div>)}

                           {counter === 5 && (<div className='veer'>
                            <div id='ruu'><h4>{`Question ${counter}`}</h4></div>
                           <input type="text" placeholder='Enter Question' ref={question} />
                           <input type="text" placeholder='Enter Option A' ref={optA}/>
                           <input type="text" placeholder='Enter Option B'ref={optB}/>
                           <input type="text" placeholder='Enter Option C' ref={optC}/>
                           <input type="text" placeholder='Enter Option D'ref={optD}/>
                           <input type="text" placeholder='Enter Correct Option' ref={correct}/>
                           </div>)}
                           <button onClick={Changeques}>{counter === intial ? "Create" : counter===6? "Save Quiz" : "Next"}</button>
                        </div>
                    )}

                    {succ && (
                        <div id='success'>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" className="bi bi-check2-circle" viewBox="0 0 16 16">
                               <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                               <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                             </svg>
                            </div>
                          <p>Your quiz is created successfully ! Join code is - <span>{buildques.joincode}</span>. <br /> You can check score of students, from the left sidebar . <br/> Thankyou.</p>
                        </div>
                    )}

                    <div id="recom">
                        It is recommended to use this feature on your desktop for a better experience. 
                    </div>
                    
                </div>
                    );
}

export default Content;