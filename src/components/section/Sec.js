 import './sec.css';
 import Card from './Card';
 function Sec(props){

  
    return (
        <div id="xer">
            <h1>{props.title}</h1>
            <div id="khand">
                <Card name = {props.name1} imgsrc ={props.img1} pie ={props.key1}/>
                <Card name = {props.name2} imgsrc ={props.img2} pie ={props.key2}/>
                <Card name = {props.name3} imgsrc ={props.img3} pie ={props.key3}/>
                <Card name = {props.name4} imgsrc ={props.img4} pie ={props.key4}/>
              

            </div>
        </div>
    );
 }

 export default Sec;