import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from './components/MainSection/MainSection';
import Specials from './components/Specials/Specials';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
  return (
    <div className="App">
      <>
      <Nav/>
      <Main/>
      <Specials/>
      <About/>
      <Testimonials/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
