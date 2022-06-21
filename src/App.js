import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/User/Home/Home";
import Payment from "./Components/User/Payment/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/:hotelName/:floor/:condition/:table"
            element={<Home />}
          />
          <Route
            exact
            path="/:hotelName/Payment/:Token"
            element={<Payment />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
