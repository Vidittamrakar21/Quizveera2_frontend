import './set.css';
import {useState,useRef,useContext} from 'react';
import axios from 'axios';
import checkcontext from '../../context/quizdata/checkcontext';

function Set () {

   const  a = useContext(checkcontext);
    const [visiblehu, setvisible] = useState(false);
   
    const password = useRef();
    const newpassword = useRef();
    const oldpassword = useRef();
    // function enabledark(){
    //     if(isdark === false){
    //         setdark(true);
    //     }

    //     else{
    //         setdark(false);
    //     }
    // }

    function showpwd(){
        if(visiblehu === false){
            setvisible(true);
        }

        else{
            setvisible(false);
        }

        
    }

   

    const [sit,pit] = useState(false);

    async function changepass(){
        if(password.current.value !== newpassword.current.value){
            pit(true)
        }

        else if(!(password.current.value && newpassword.current.value && oldpassword.current.value)){
            alert("Input fields are necessary !");
        }

        else{
            const data = await (await axios.patch(`/api/user/pass/:mail`, {password: newpassword.current.value})).data;
            if(data){
                console.log(data);
                alert(data.message);
                password.current.value = "";
                newpassword.current.value = "";
                oldpassword.current.value = "";
            }
        }


    }

    const deleteacc = async () => {
        const data = await (await axios.delete(`/api/user/:mail`)).data;
        if(data){
          
            alert(data.message);
            window.location.reload();
            
        }
    }

    return(
        <div className='rixa'>
            <div id="saaf">
                <h2>Settings</h2>
                <div id="change">
                    <h4>Change Password</h4>
                   
                    <input type={visiblehu === true ?"text" : "password"} placeholder="Current password" className='pwd' ref={oldpassword}/>
                    
                    <input type={visiblehu === true ?"text" : "password"} placeholder="New password" className='pwd' ref={password}/>
                    
                    <input type={visiblehu === true ?"text" : "password"} placeholder="Confirm password"className={`pwd ${sit === true ? "redy": ""}`} ref={newpassword}/>

                    

                    <div id="mila"> 
                        <input type="checkbox" onChange={showpwd} />
                        show password
                    </div>

                    <h5 className={`mdh ${sit === false ? "ghumi": ""}`}>* Password doesn't matches with the New password</h5>
            
                    <button onClick={changepass} className='ipo'>change</button>



                </div>
                <div>


                   {/* <h4>Enable Dark Mode</h4>  */}
                  {/* <div className='dark' onClick={enabledark}>
                    {!isdark && ( <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-toggle2-off" viewBox="0 0 16 16">
                     <path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"/>
                     <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"/>
                   </svg>
                   )}

                    {isdark && (
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(87, 244, 87)" class="bi bi-toggle2-on" viewBox="0 0 16 16">
                         <path d="M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z"/>
                         <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z"/>
                       </svg>
                    )}
                  </div> */}

                  <h4>Delete Account</h4>
                  <button className='ipo'onClick={deleteacc}>Delete</button>
                </div>
                  <a href="mailto:vidit.tamrakar16@gmail.com">Help?</a>
            </div>
        </div>
    )
}

export default Set;