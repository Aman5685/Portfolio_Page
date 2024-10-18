// import React from 'react';

import { Toaster } from "react-hot-toast"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio"
import Skills from "./Components/Skills"

function App() {
  return (
    <>
     <div>
     <Navbar />
     <Home />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
     </div>
     <Toaster />
    </>
  )
}

export default App
