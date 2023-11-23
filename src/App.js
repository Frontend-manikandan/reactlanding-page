import React from 'react'
import TopNav from './Components/TopNav';
import Home from './Components/Home';
import Games from './Components/Games';
import Forum from './Components/Forum';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Event from './Components/Event';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const App = () => {
  return (
  <BrowserRouter>
     <TopNav/>
     <Home/>
     <Games/>
     <Forum/>
     <Signup/>
     <Contact/>
     <Event/>
    <div className='App'>
      <>
       <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/game' element={Games}/>
          <Route path='./Forum' element={Forum}/>
          <Route path='/signup' element={Signup}/>
          <Route path='./contact' element={Contact}/>
          <Route path='./event' element={Event}/>
        </Routes>
      </>
      </div>
  </BrowserRouter>
  );
}

export default App;