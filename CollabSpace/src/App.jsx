import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginRegister from "./components/LoginRegister/LoginRegister.jsx";
import Heading from "./components/Heading/Heading.jsx";
import Quatashion from "./components/quatashion/quatashion.jsx";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <Heading onLoginClick={() => setShowLogin(true)} />

      <div className={`content ${showLogin ? "blurred" : ""}`}>
        <div className="left-side">
          <Quatashion />
        </div>
      </div>

      {showLogin && (
        <div
          className="modal-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <LoginRegister onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;