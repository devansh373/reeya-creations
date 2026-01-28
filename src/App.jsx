import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Catalogue from "./components/Catalogue";
import Brands from "./components/Brands";
import Manufacturing from "./components/Manufacturing";
import Capabilities from "./components/Capabilities";
import Categories from "./components/Categories";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Simple smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Catalogue />
        <Brands />
        <Manufacturing />
        <Capabilities />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
