import React, { useState } from "react";
import Login from "../components/Login";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <div>
      <Hero />
      <section id="login" className="pt-5">
        <Login />
      </section>
    </div>
  );
};

export default Home;
