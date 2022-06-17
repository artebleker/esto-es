import React from "react";
import './app.css'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import MyProjects from './pages/MyProjects'
import AddProject from './pages/AddProject'
import EditProject from './pages/EditProject'
import Error from './pages/Error'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyProjects/>}/>
            <Route path="/add-project" element={<AddProject/>}/>
            <Route path="/edit-project/:projectName" element={<EditProject/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
