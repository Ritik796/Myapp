// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [label, setlable] = useState("Enable Darkmode");
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState("light");

  const showColor = (e) => {
    setcolor(e.target.value);
    document.body.style.backgroundColor = color;
  };

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setalert(null);
  }, 3000);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setlable("Disable Darkmode");
      showalert("Darkmode is Enabled", "danger");
      document.body.style.backgroundColor = "#48bbb6";
      document.title = "TextUtils-Darkmode";
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 2000);
      setInterval(() => {
        document.title = "Textutils is amazing used it now ";
      }, 1500);
    } else {
      setmode("light");
      setlable("Enable Darkmode");
      showalert("Darkmode is Disabled", "success");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-lightmode";
    }
  };
  return (
    // <BrowserRouter>
      <>
        <Navbar
          title="Textutils"
          texts="About Textutils"
          mode={mode}
          toggleMode={toggleMode}
          label={label}
          alert={alert}
          showalert={showalert}
          color={color}
          showColor={showColor}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route
              path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  alert={alert}
                  showalert={showalert}
                />
              {/* }
            /> */}
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      </>
    // </BrowserRouter>
  );
}

export default App;
