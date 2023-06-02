import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
