import {} from "react-bootstrap"
import React from 'react';
import NavBar from './component/NavBar';
import About from "./component/About";
import Aboutus from "./component/Aboutus";
import Footer from "./component/Footer";
import NavLast from "./component/NavLast";
import Services from "./component/Services";
import WorkingProcess from "./component/WorkingProcess";
import Experience from "./Experience";
function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Aboutus />
     <Services />
     <WorkingProcess />
   <Experience />
      <Footer />
      <NavLast />
    </div>
  );
}

export default App;

