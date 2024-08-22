import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Newsletters from './Pages/Newsletters.jsx';
import Publisher from './Pages/Publisher.jsx';
import Login from './Pages/Login.jsx';
import SignUpPage from './Pages/SignUp.jsx';
import LoginLink from './Components/LoginLinkComp.jsx';

function App() {


  return (
    
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/news' element={<Newsletters />}/>
          <Route path='/publisher_signup' element={<Publisher />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='/login-link' element={<LoginLink />}/>
        </Routes>
      </Router>
   
  )
}

export default App
