import {  Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/gdfg"
        />
        <Route
          path="*"
          element="/not"
        />
      </Routes>
    </div>
  );
}

export default App;
