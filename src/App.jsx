import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Plans from "./components/menustuff/plans";
import {Profile, SignIn, SignUp} from "./components/menustuff/profile";
import Menu from "./components/menustuff/menu";
import Register from "./components/menustuff/register";
import Home from "./components/menustuff/home";
import Footer from "./components/fotter";


function App() {
  return (
    <div className="WholePage">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Route>
            <Route path="/menu" element={<Menu />} />
            <Route path="/signing" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
