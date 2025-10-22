import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aboutpage from "./page/Aboutpage";
import Homepage from "./page/Homepage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {


 const [isAbout, setIsAbout] = useState(false)

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
       <Navbar isAbout={isAbout}/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage setIsAbout={setIsAbout}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
