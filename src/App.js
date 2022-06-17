import './App.css';
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from './Components/User/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Router>
       <Route exact path="/:hotel/:floor/:condition/:table" component={Home} />
       <Route exact path="/" component={Home} />

     </Router>
     </BrowserRouter>
    </div>
  );
}

export default App;
