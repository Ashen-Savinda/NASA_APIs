import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './components/Home';
import NasaPhoto from './components/APOD';
import NavBar from './components/NavBar';
import MarsRoverPhotos from './components/MarsRoverPhotos';
import './styles.css';
import EarthImagery from './components/EarthImagery';
import Login from './Login'
import SignUp from './Signup'
import About from './components/About'

function App() {

  const { user } = useAuthContext();


  return (

    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/nasaphoto' element={<NasaPhoto />} /> 
          <Route path='/marsroverphotos' element={user ? <MarsRoverPhotos /> : <Navigate to="/login" />} />
          <Route path='/earthimagery' element={<EarthImagery />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/signup' element={!user ? <SignUp /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
