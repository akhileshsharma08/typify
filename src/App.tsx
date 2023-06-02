import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
