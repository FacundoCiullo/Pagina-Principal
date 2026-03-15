import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PromoBar from "./components/home/PromoBar";
import Home from "./pages/Home";
import "./styles/app.css";

/*-------------WIDGET----------------*/

import WhatsAppWidget from "./components/widgets/WhatsAppWidget";
import ScrollTopWidget from "./components/widgets/ScrollTopWidget";


function App() {
  return (
    <>     
      <PromoBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>

      <WhatsAppWidget />

      <ScrollTopWidget />


      <Footer />
    </>
  );
}

export default App;