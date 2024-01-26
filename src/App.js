import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Question from './Components/Question';
import Me from './Components/Me';
import Labdhi from './Components/Labdhi';
import BeforeCollide from './Components/BeforeCollide';
import Result from './Components/Result';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/me' Component={Me}/>
      <Route path='/labdhi' Component={Labdhi}/>
      <Route path='/collide' Component={BeforeCollide}/>
      <Route path='/Result' Component={Result}/>
      <Route path='/question' Component={Question}/>
    </Routes>  
   </Router>
  );
}

export default App;
// <Link to="/" style={{ padding: 5 }}>