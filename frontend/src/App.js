import { Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./components/results.js"

import './App.css';


function App() {
  return (
      <Results />
  );
}

// <Route exact path={["/"]} component={Results} />
export default App;
