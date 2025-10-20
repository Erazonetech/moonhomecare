import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aboutpage from "./page/Aboutpage";
import Homepage from "./page/Homepage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
