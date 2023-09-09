import './panel.css';
import checkcontext from '../../context/quizdata/checkcontext';
import { useState,useContext,useEffect } from 'react';
import axios from 'axios';


function Panel(){
    const a = useContext(checkcontext);
    const [stud , showstud] = useState(false);  
    const [set , show] = useState([]);  

    const callgiven = async () =>{
      const build = await(await axios.get('/api/user/:mail')).data;
      if(build.message){
        alert(build.message);
      }
      else{
        const qdata = build.qbuild;
        show(qdata);
      }
     

    }

    useEffect(()=>{
      callgiven();
    },[])

  let quizdata = [set];


  // const showdata = async () => {
  //   showstud(true);
  //   const qdata = await(await axios.get('http://localhost:8080/api/user/')).data;
  //   show(qdata.qgiven);
  //   console.log(qdata.qgiven);
  // }
   

  

    return (
        <div className="panel">
        <div id="user">
            <div id="userimg">
                <img src="images/pro.jpg" alt="" />
            </div>
            <div id='username'>
                <h3>{a.name? a.name : "User"}</h3>
            </div>
        </div>

{stud === false && (<div className="cp">


<div id='toto'>
    <h2>Quizes Created</h2>
</div>
{quizdata.length === 0 && (
 <div>
 <h3>No Quiz Yet !</h3>
</div>
)}

{/* {a.curstate && (
    <div className='numq'>
    <h3>{quizdata[0].name}</h3>
  <h5>Join code - {quizdata[0].joincode}</h5>
  <h4>Date Created - {quizdata[0].date}</h4>
  <div id="qq">
    <button id="gu">Check</button>
    <button>Delete</button>
  </div>
</div>
)} */}

{set.map( (item) =>{
    return (

        <div className='numq' key={item._id}>
        <h3>{item.name}</h3>
      <h5>Join code - {item.joincode}</h5>
      <h4>Date Created - {item.date}</h4>
      <div id="qq">
        {/* <button id="gu" onClick={showdata}>Check</button> */}
        {/* <button onClick={deleteq}>Delete</button> */}
      </div>
    </div>
    
    )
} )}  

{/* <button id='display'>Show Quiz</button> */}

</div>)}

{/* {stud === true && (<div id='quizdata'>
  <p>{set}</p>
</div>)} */}



 </div>
    );
}

export default Panel;