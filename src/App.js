import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } 
from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#033142";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
          <Routes>
          <Route element={<About mode={mode} />}path="/about">
          
          </Route>
          
          <Route element={<TextForm showAlert={showAlert} heading="Enter the text analyze Below" mode={mode}/>} path="/">
          
          </Route>
          </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;
