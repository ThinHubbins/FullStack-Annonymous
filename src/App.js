import React from "react";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom';
import Form from "./Forms";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
  
      
    </div>
  );
};

export default App;
