
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element ={<Homepage/>}/>
        <Route path="/late" element={<Latest />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
