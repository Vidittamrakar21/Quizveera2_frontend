import Checkcontext from './checkcontext';
import { useState } from "react";

const Checkstate = (props) =>{

    const s = false;

    const [curstate , setstate] = useState(s);
    
    const [start ,makeit] = useState(false);
    const [flash ,flashit] = useState(false);
    const [iA ,uA] = useState("");
    const [iB ,uB] = useState("");
    const [key , setkey] = useState("");
    const [mail, usemail] = useState("");
    const [name, usename] = useState("");
    const [token, istoken] = useState(undefined);

   
    const update = () =>{
        setstate(true);
    
    }

    const startq = () => {
        makeit(true);
    }
    const endq = () => {
        makeit(false);
    }

    const flasher = (a,b) => {
        flashit(true);
        uA(a);
        uB(b);

    }
    const putkey = (x) => {
        setkey(x);
    }
    const notflasher = () => {
        flashit(false);
    }

    const setvalue = (a,b) => {
        usemail(a);
        usename(b);
    }

    const settoken = (a) =>{
        istoken(a)
    }
   
    

   return (
    <Checkcontext.Provider value={{curstate,update,startq,endq,start,flash,flasher,notflasher,putkey,key,iA,iB,setvalue,name,mail,settoken,token}}>
        {props.children}
    </Checkcontext.Provider>
   ); 
}

export default Checkstate;