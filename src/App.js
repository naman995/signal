import React from "react";
import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";
import SignUp2 from "./pages/sign_up2";
import Thanks from "./pages/thanks";
import ForgetPassword from "./pages/forgetPassword";
import CreatePassword from "./pages/createNewPassword";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_up2" element={<SignUp2 />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/createNewPassword" element={<CreatePassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
