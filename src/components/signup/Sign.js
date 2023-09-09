import './sign.css';
import { useRef,useState } from 'react';
import axios from 'axios';




function Sign(props){

    const email = useRef();
    const username = useRef();
    const password = useRef();
    const conpass = useRef();

    const [match , nomatch ] = useState(false);
    const [nodata , data]  = useState(undefined);

    const checkuser = async () =>{
        

        if(password.current.value !== conpass.current.value){
            nomatch(true);
        }

        else{
            const newuser = await (await axios.post('/api/user/register', {email: email.current.value, username: username.current.value, password: password.current.value})).data;
            if(newuser){
                
               
               
                alert(newuser.message);
                console.log(newuser);
                password.current.value = "";
                conpass.current.value = "";
                username.current.value = "";
                email.current.value = "";
                nomatch(false);
                data(undefined);
            }

            else{
                data(false);
                
            }

        }
    }

    return(
        <div className= {`si ${ props.val === false ? "chuu" : ""}`} >
            <div id="purp" ></div>
           
            <h2>Create your account</h2>
            <input type="text" placeholder='Enter Name' className='in' ref={username}  />
            <input type="email" placeholder='Enter Email' className='in' ref={email} />
            <input type="password" placeholder='Password'className='in' ref={password}/>
            <input type="password" placeholder=' Confirm Password'className='in' ref={conpass}/>
            <button id='pt' onClick={checkuser}>Sign up</button>
            <h5 id={`${match?"required":"usecre"}`}>{ match === true ? " Password doesn't matches with the enterd one!" : nodata=== false?"Creating ...." : ""}</h5>
        
        {/*All the details are required!, Password doesn't matches with the enterd one!*/}
          </div>
    );
}

export default Sign;