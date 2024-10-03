import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/usercontext";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashoard";
import Item from "./pages/Item";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
