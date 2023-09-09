

import './App.css';
import Navbar from './components/navbar/Navbar';
import Foot from './components/foot/Foot';
import Home from './components/home/Home';
import Build from './components/create/build'
import Score from './components/score/Score';
import Checkstate from './context/quizdata/checkstate';
import Profile from './components/myprofile/profile';
import Set from './components/settings/set';
import Dabu from './components/dabu/dabu,';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';


function App() {

  

 

  return (
    <Router>
      <Checkstate>

    <div className="App">

      <Navbar/>

      <Dabu/>

   <Routes>

   <Route exact path='/' element={<Home/>}></Route>
   <Route exact path='/build' element={ <Build/> }></Route>
   <Route exact path='/score' element={<Score/>}></Route>
   <Route exact path='/profile' element={<Profile/>}></Route>
   <Route exact path='/settings' element={<Set/>}></Route>
   </Routes>

      <Foot/>


    </div>
      </Checkstate>
      </Router>
  );
}

export default App;
