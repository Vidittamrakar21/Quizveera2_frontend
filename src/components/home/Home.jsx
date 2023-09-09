import Join from '../join/Join'
import Sec from '../section/Sec';
import Temp from '../quiztemp/temp';
import { useState,useContext } from 'react';
import checkcontext from '../../context/quizdata/checkcontext';
import './home.css';
function Home(){

  const a = useContext(checkcontext);

    const science = [
        {
          name: "Env. Science",
          imgsrc: "images/img1.jpg",
          key: 1
        },
        
        {
          name: "Chemistry",
          imgsrc: "images/img2.jpg",
          key: 2
        },
    
        {
          name: "Physics",
          imgsrc: "images/img3.jpeg",
          key: 3
        },
    
        {
          name: "Biology",
          imgsrc: "images/img4.webp",
          key: 4
        },
    
       
      ]
    
    
    
      const maths = [
        {
          name: "Trigonometry",
          imgsrc: "images/img6.jpg",
          key: 5
        },
        
        {
          name: "Calculus",
          imgsrc: "images/img7.jpg",
          key: 6
        },
    
        {
          name: "Geometry",
          imgsrc: "images/img8.jpg",
          key: 7
        },
    
        {
          name: "Algebra",
          imgsrc: "images/img9.jpg",
          key: 8
        },
    
      
      ]
    
    
      const social = [
        {
          name: "History",
          imgsrc: "images/img11.png",
          key: 9
        },
        
        {
          name: "Geography",
          imgsrc: "images/img12.jpg",
          key: 10
        },
    
        {
          name: "Civics",
          imgsrc: "images/img13.jpg",
          key: 11
        },
    
        {
          name: "Economics",
          imgsrc: "images/img14.jpg",
          key: 12
        },
    
      ]
    
      const eng = [
        {
          name: "Tenses",
          imgsrc: "images/img16.jpg",
          key: 13
        },
        
        {
          name: "Adjectives",
          imgsrc: "images/img17.jpg",
          key: 14
        },
    
        {
          name: "Verbs",
          imgsrc: "images/img18.png",
          key: 15
        },
    
        {
          name: "Nouns",
          imgsrc: "images/img19.png",
          key: 16
        },
    
    
      ]

        function handleA(){
          a.notflasher();
        }

        function handleB(){
          a.startq();
        }

    return(

      <div>


      { !a.start && (
       
       <div>


        <div id="main">
            <div id="front"><img src= "images/4119036.jpg" alt="" /></div>
             <Join/>
        </div>

        {a.flash && (
          <div className='bkl'>
          <div id='bklim'>
            <img src={a.iA} alt="" />
          </div>
          <div id='bkldes'>
            <h4> This is {a.iB} quiz, contains 5 ques.</h4>
          </div>
          <div id='bklbut'>
            <button id='stuart'onClick={handleB}>Start</button>
            <button id='pencil' onClick={handleA}>Cancel</button>
          </div>
        </div>
        )}
  
        <section id="zz">
  
        <Sec title="Science" name1 = {science[0].name} img1 = {science[0].imgsrc} key1 = {science[0].key} 
          name2 = {science[1].name} img2 = {science[1].imgsrc} key2 = {science[1].key}
          name3 = {science[2].name} img3 = {science[2].imgsrc} key3 = {science[2].key}
          name4 = {science[3].name} img4 = {science[3].imgsrc} key4 = {science[3].key}
       
          />
  
        <Sec  title="Mathematics" name1 = {maths[0].name} img1 = {maths[0].imgsrc} key1 = {maths[0].key}
        name2 = {maths[1].name} img2 = {maths[1].imgsrc} key2 = {maths[1].key}
        name3 = {maths[2].name} img3 = {maths[2].imgsrc} key3 = {maths[2].key}
        name4 = {maths[3].name} img4 = {maths[3].imgsrc} key4 = {maths[3].key}
   
        />
        
        <Sec title="Social Studies"  name1 = {social[0].name} img1 = {social[0].imgsrc} key1 = {social[0].key}
        name2 = {social[1].name} img2 = {social[1].imgsrc} key2 = {social[1].key}
        name3 = {social[2].name} img3 = {social[2].imgsrc} key3 = {social[2].key}
        name4 = {social[3].name} img4 = {social[3].imgsrc} key4 = {social[3].key}
        
        />
  
        <Sec title="English Lng."  name1 = {eng[0].name} img1 = {eng[0].imgsrc} key1 = {eng[0].key}
        name2 = {eng[1].name} img2 = {eng[1].imgsrc} key2 = {eng[1].key}
        name3 = {eng[2].name} img3 = {eng[2].imgsrc} key3 = {eng[2].key}
        name4 = {eng[3].name} img4 = {eng[3].imgsrc} key4 = {eng[3].key}
        
        />
        </section>
  
        </div> )}

        {a.start && ( <div>
            <Temp/>
        </div>)}
        
        </div>
    );

}

export default Home;