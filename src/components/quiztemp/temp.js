import './temp.css'
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import checkcontext from '../../context/quizdata/checkcontext';



function Temp () {

    const a = useContext(checkcontext);

   const [time, settime] = useState(60); 
   const [isgreenA, greenitA] = useState(false);
   const [isgreenB, greenitB] = useState(false);
   const [isgreenC, greenitC] = useState(false);
   const [isgreenD, greenitD] = useState(false);
   const [isredA, reditA] = useState(false);
   const [isredB, reditB] = useState(false);
   const [isredC, reditC] = useState(false);
   const [isredD, reditD] = useState(false);
   const [intialq, setq] = useState("");
   const [intialoptA, setoptA] = useState("");
   const [intialoptB, setoptB] = useState("");
   const [intialoptC, setoptC] = useState("");
   const [intialoptD, setoptD] = useState("");
   const [intialdata, setdata] = useState({});
   const [iscorrect, setcorrect] = useState("");
   const [qname, isname] = useState("");
   const [now, change] = useState(0);
   const [touch, touchit] = useState(true);
   const [marks, setmarks] = useState(0);
   
 async  function changequestion (){
    if(now !== 4){
        change(now + 1);
        greenitA(false);
        greenitB(false);
        greenitC(false);
        greenitD(false);
        reditA(false);
        reditB(false);
        reditC(false);
        reditD(false);
        touchit(true);

    }

    else{

        const end = await(await axios.post('/api/user/marks/:mail',{joincode: key, score: marks, name:qname})).data;
       if(end){

           a.endq();
           a.notflasher();
           alert("Test submitted successfully !")
        }
        // window.location.reload();
    }
  
}
    const key = a.key;
    const getquiz = async () =>{
        const quiz = await(await axios.get(`/api/quiz/${key}`)).data
        if(quiz.message){
            alert(quiz.message);
            a.endq();
            a.notflasher();
        }
        console.log(quiz);
        setdata(quiz);
        const first  = quiz;
        setq(first.buildq);
        setoptA(first.optionA);
        setoptB(first.optionB);
        setoptC(first.optionC);
        setoptD(first.optionD);
        setcorrect(first.correct);
        isname(first.quizname);
        // settime(first.timer);
       
    }
    
    useEffect(()=>{
       getquiz()
      
    })

    const question = intialq;
    const optA = intialoptA;
    const optB = intialoptB;
    const optC = intialoptC;
    const optD = intialoptD;
    const correct = iscorrect;

    const timer = async () =>{
        if(time !==0){
            settime(time-1)

        }

        else{
            
            if(time === 0){
                settime(0);

                const end = await(await axios.post('/api/user/marks/:mail',{joincode: key, score: marks,name:qname})).data;
                if(end){
                    
                    a.endq();
                    a.notflasher();
                    settime(undefined);
                    alert("Test submitted successfully !")
                }
            }
        }
    }

    setTimeout(timer,1000);

   

    const checkopt = (x) => {
    if(touch === true){

        touchit(false);

        if(x === correct[now] ){
            if(x=== 'A'){
                greenitA(true);
                setmarks(marks+1);
            }
            
            else if(x === 'B' ){
                greenitB(true);
                setmarks(marks+1);
            }
            
            else if(x === 'C' ){
                greenitC(true)
                setmarks(marks+1);
            }  
            
            else if(x === 'D'){
                greenitD(true);
                setmarks(marks+1);
            }
            
        }
        
        
        else{
            
            if(x=== 'A'){
                reditA(true);
            if(correct[now]=== 'A'){
                greenitA(true);
            }
            
            else if(correct[now] === 'B' ){
                greenitB(true);
            }
            
            else if(correct[now] === 'C' ){
                greenitC(true)
            }  
            
            else if(correct[now] === 'D'){
                greenitD(true);
            }
            
            
        }
        
        else if(x === 'B' ){
            reditB(true);
            if(correct[now]=== 'A'){
                greenitA(true);
            }
            
            else if(correct[now] === 'B' ){
                greenitB(true);
            }
            
            else if(correct[now] === 'C' ){
                greenitC(true)
            }  
            
            else if(correct[now] === 'D'){
                greenitD(true);
            }
        }
        
        else if(x === 'C' ){
            reditC(true)
            if(correct[now]=== 'A'){
                greenitA(true);
            }
            
            else if(correct[now] === 'B' ){
                greenitB(true);
            }
            
            else if(correct[now] === 'C' ){
                greenitC(true)
            }  
            
            else if(correct[now] === 'D'){
                greenitD(true);
            }
        }  
        
        else if(x === 'D'){
            reditD(true);
            if(correct[now]=== 'A'){
                greenitA(true);
            }
            
            else if(correct[now] === 'B' ){
                greenitB(true);
            }
            
            else if(correct[now] === 'C' ){
                greenitC(true)
            }  
            
            else if(correct[now] === 'D'){
                greenitD(true);
            }
        }
        
       }    
        
    }
    
    
}



return (
        <div>
              <div className="userB">
            <div id="userimgB">
                <img src="images/pro.jpg" alt="" />
            </div>
            <div id='usernameB'>
                <h3>{a.name? a.name : "User"}</h3>
            </div>
        </div>

        <div className="userB">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(59, 137, 233)" className="bi bi-stopwatch" viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
              </svg>
            </div>
            <div id='lala'>
            <h4> Time Left - {time} sec</h4>

            </div>
        </div>

        <div id="hula">
            <input type="text" value={`Q ${now + 1} ${question[now] === undefined ? "": question[now]}`} readOnly className="tags" id='ques'/>
          <div className={isgreenA=== true ? "tags green" : isredA===true? "tags red" : "tags"} onClick={()=>{checkopt("A")}}><h4> &nbsp; A {optA[now]}</h4></div>
          <div className={isgreenB=== true ? "tags green" : isredB===true? "tags red" : "tags"} onClick={()=>{checkopt("B")}}><h4> &nbsp; B {optB[now]}</h4></div>
          <div className={isgreenC=== true ? "tags green" : isredC===true? "tags red" : "tags"} onClick={()=>{checkopt("C")}}><h4> &nbsp; C {optC[now]}</h4></div>
          <div className={isgreenD=== true ? "tags green" : isredD===true? "tags red" : "tags"} onClick={()=>{checkopt("D")}}><h4> &nbsp; D {optD[now]}</h4></div>
            <button onClick={changequestion}>{now=== 4? "Submit" :"Next"}</button>
        </div>

        </div>
    )
}

export default Temp;
