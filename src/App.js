import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import SpanishClasses from "./components/SpanishClasses";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./contexts/ThemeContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() { 
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <SpanishClasses />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;