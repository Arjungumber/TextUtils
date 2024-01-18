import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
           exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="TextUtils WordCounter CharacterCounter"
                mode={mode}
              />
            }
          ></Route>
          {/* this div is for css where w've given bootstrap class container and my-3 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
