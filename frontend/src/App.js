// import { Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Results from "./components/results.js"

// import './App.css';


// function App() {
//   return (
//       <Results />
//   );
// }

// // <Route exact path={["/"]} component={Results} />
// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
