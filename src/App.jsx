import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
