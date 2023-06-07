import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import NotFound from "./components/pages/not-found";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
