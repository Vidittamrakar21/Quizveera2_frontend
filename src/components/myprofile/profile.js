import './profile.css';
import {useState, useRef,useContext} from 'react';
import axios from 'axios';
import checkcontext from '../../context/quizdata/checkcontext';


function Profile () {
    const a = useContext(checkcontext);
    const [visibleN, isvisibleN] = useState(false);
    const [visibleE, isvisibleE] = useState(false);
   
    

    const email = useRef();
    const username = useRef();

    function handlename(e){
        isvisibleN(true);
       
    }

    async function setn(){
       
        isvisibleN(false);
        const data = await (await axios.patch(`/api/user/username/:mail`, {username: username.current.value})).data;
        if(data){
            alert(data.message);
            const mail = data.doc.email;
            const name = data.doc.username;
            a.setvalue(mail,name);
        }
    }


    function handlemail(e){
        isvisibleE(true);
      
    }

    async function sete(){
    
        isvisibleE(false);
        const data = await (await axios.patch(`/api/user/email/:mail`, {email: email.current.value})).data;
        if(data){
            alert(data.message);
            const mail = data.doc.email;
            const name = data.doc.username;
            a.setvalue(mail,name);
        }
    }
   


   return (
    <div className='jixa'>
    <div id='clean'>
        <h2>My Profile</h2>
      <div>
        <div className='loto'>
        <h4> Username</h4>
        <input type="text" value={a.name} />
        </div>

        <input type="text" ref={username} className={`ola ${visibleN === false ? "gayab" : ""}`} />
        <button className='buty ty' onClick={handlename} >Edit</button>
        <button className='buty fy' onClick={setn}>Save</button>
       </div>

      <div>
        <div className='loto'>
        <h4>Registered Email Id</h4>
        <input type="mail" value={a.mail} />
        </div>

        <input type="text" ref={email} className={`ola ${visibleE === false ? "gayab" : ""}`}  />
        <button className='buty ty' onClick={handlemail}>Edit</button>
        <button className='buty fy ' onClick={sete}>Save</button>
       </div>
    </div>

   </div>

   )

}

export default Profile;