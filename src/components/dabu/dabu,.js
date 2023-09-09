import './dabu.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Dabu () {
    let location = useLocation();

    useEffect(() => {
      console.log(location.pathname);
    }, [location]);
   


   return (
    <div id='dabbu'>
        <ul id='cloud'>
        <li><Link to={"/"} className={`admire ${location.pathname === '/' ? "active" : ""} `}>Home</Link></li>
            <li><Link to={"/build"} className={`admire ${location.pathname === '/build' ? "active" : ""} `}>Build Quiz</Link></li>
            <li><Link to={"/score"} className={`admire ${location.pathname === '/score' ? "active" : ""} `}>My Score</Link></li>
            
        </ul>
    </div>
   )
    
}

export default Dabu;