import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import Alert from "./component/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const [mode, setMode] = useState("light"); // false shows weather dark mode is on or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#07153e";
      showAlert("Dark Mood has been Enabled", "Success");

      // setInterval(() => {
      //   document.tittle = "Hello";
      // }, 2000);
      // setInterval(() => {
      //   document.tittle = "Mubashir";
      // }, 3000);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mood has been Enabled", "Success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        tittle="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}

        {/* <Route
              path="/"
              element={ */}
        <TextForm
          heading="Enter the text to Analyze Below :"
          mode={mode}
          showAlert={showAlert}
        />
        {/* }
            />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
