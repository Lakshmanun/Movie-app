
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPages } from "./pages/DetailsPages";
import Home from "./pages/Home";
import Header from "./components/Header";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Create from "./components/Create"
import './index.css';
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/details/:id" element={<DetailsPages />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
