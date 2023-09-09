
import './login.css';
import{useRef,useContext,useEffect} from 'react';
import axios from 'axios';
import checkcontext from '../../context/quizdata/checkcontext';

function Login(props){
    
       const emailinp = useRef(null);
       const passinp = useRef(null);
      const a = useContext(checkcontext);
      

      useEffect(() => {
        const cookieString = document.cookie;
        const cookiesArray = cookieString.split('; ');
    
        for (const cookie of cookiesArray) {
          const [cookieName, cookieValue] = cookie.split('=');
    
          if (cookieName === 'token') {
              a.settoken(cookieValue);
          }
        }
      });


       async function logging (){
       
        const newuser = await (await axios.post('/api/user/login', {email: emailinp.current.value,  password: passinp.current.value})).data;
        
        
        
              console.log(newuser);
              alert(newuser.message);
              passinp.current.value = "";
              emailinp.current.value = "";
              

                 if(newuser.user){

                   const name = newuser.user.username;
                   const email = newuser.user.email;
                   a.setvalue(email,name);
                }
                
            

       }
         

 return(
          <div className={`log ${ props.name === false ? "gayab" : ""}`} >
            <div id="pink" ></div>
           
            <h2>Log in to Quizveera</h2>
            <input ref={emailinp} type="email" placeholder='Email' className='in' />
            <input ref={passinp} type="password" placeholder='Password'className='in' />
            <button id='tt' onClick={logging}>Log in</button>
            <div id="re">
            <input type="checkbox" id="rem"/>
            <h5>Remember my login ?</h5>
            </div>
          </div>
        );
}

export default Login;