
import './bar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Login from '../login/Login';
import Sign from '../signup/Sign';
import Side from '../sidebar/Side';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Navbar() {

    let location = useLocation();
   

    useEffect(() => {
      console.log(location.pathname);
    }, [location]);


    const [khula, kholdo] = useState(false);
    const [open, doit] = useState(false);
    const [sideop, sideit] = useState(false);
  
   
    function displaylog(){
        if(khula === false){
            kholdo(true);
            doit(false);
            sideit(false);
        }

        else if(khula === true){
            kholdo(false);
            
        }

        else{
            console.log("error");
        }
      
      
    }

    function displaysign(){
        if(open === false){
            doit(true);
            kholdo(false);
            sideit(false);
        }

        else if(open === true){
            
            doit(false);
            
        }

        else{
            console.log("error");
        }
      
      
    }

    function displayside(){
        if(sideop === false){
            sideit(true);
            kholdo(false);
            doit(false);
        }

        else if(sideop === true){
            sideit(false);
            
        }

        else{
            console.log("error");
        }
      
      
    }

    return (

        <div className='now'>
            <nav className="bar">
        <ul>
            <h1>Quizveera</h1>
            <li><Link to={"/"} className={`admire ${location.pathname === '/' ? "active" : ""} `}>Home</Link></li>
            <li><Link to={"/build"} className={`admire ${location.pathname === '/build' ? "active" : ""} `}>Build Quiz</Link></li>
            <li><Link to={"/score"} className={`admire ${location.pathname === '/score' ? "active" : ""} `}>My Score</Link></li>
            <button className="but" onClick={displaylog}>Log in</button>
            <button id="cut" onClick={displaysign}>Sign up</button>
            <div id="menu" onClick={displayside}>
               <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
               </svg>
            </div>
        </ul>
    </nav>
       <Login name ={khula} />
        <Sign val = {open} />
      <Side kaam ={sideop}/>

        </div>
        );
}

export default Navbar;