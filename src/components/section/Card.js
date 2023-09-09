import './card.css';
// import imag from '../images/img1.jpg';
import { useContext } from 'react';
import checkcontext from '../../context/quizdata/checkcontext';
function Card (props){
const a = useContext(checkcontext);
    function handeler(){
        a.flasher(props.imgsrc,props.name);
        a.putkey(props.pie);
    }

   
    return (
                <div id="card" onClick={handeler}>
                    <div id="photo">
                        <img src={props.imgsrc} alt="" />
                    </div>
                    <div id="desc">
                        <h3>{props.name}</h3>
                        <div id="qu"><h5>5 Qs</h5></div>
                    </div>
                </div>
    );
}

export default Card;