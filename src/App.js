import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light Mode has been enabled", "success");
      document.title = "Dark Mode Enabled";
    } else {
      setMode("dark");

      showAlert("Dark Mode has been enabled", "success");
      document.title = "Light  Mode Enabled";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils2"
          aboutText="About."
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
