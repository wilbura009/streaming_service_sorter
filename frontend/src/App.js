
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Result from './components/Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/titles' element={<Home />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
