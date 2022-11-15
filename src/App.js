import { useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";
import Modal from "./components/Home/Navbar/Modal";
import Navbar from "./components/Home/Navbar/Navbar";
import SocialNavbar from "./components/Home/SocialNavbar/SocialNavbar";
import VnutrNews from "./components/OtdelNews/VnutrNews/VnutrNews";
import AfterDalee from "./components/OtsleditDostavku/AfterDalee";
import AboutUsPage from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Dostavka from "./pages/Dostavka";
import Home from "./pages/Home";
import NewsItdel from "./pages/NewsItdel";
import UlugiAvia from "./pages/UlugiAvia";
import UslugiCars from "./pages/UslugiCars";
import UslugiJd from "./pages/UslugiJd";
import UslugiMors from "./pages/UslugiMors";
import UslugiOpas from "./pages/UslugiOpas";
import UslugiSobr from "./pages/UslugiSobr";
import ScrollToTop from "./scrolToTop";

function App() {
  const [showModal, setShowModal] = useState(false)
  const showModalHandler = (bool)=>{
    console.log(bool);
      setShowModal(bool)
  }
  const hideModalHandler = (bool)=>{
    setShowModal(false)
  }
  return (
    <>
    <HashRouter>
    {showModal && <Modal hideModalHandler={hideModalHandler}/>}
        <SocialNavbar />
        <Navbar showModalHandler={showModalHandler}/>
      <ScrollToTop />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/truck" element={<UslugiCars />} />
      <Route path="/avia" element={<UlugiAvia />} />
      <Route path="/jd" element={<UslugiJd />} />
      <Route path="/morsk" element={<UslugiMors />} />
      <Route path="/opasniye" element={<UslugiOpas />} />
      <Route path="/dostavka" element={<Dostavka />} />
      <Route path="/IDinfo" element={<AfterDalee />} />
      <Route path="/news" element={<NewsItdel />} />
      <Route path="/news-id/:id" element={<VnutrNews />} />
      <Route path="/sobr" element={<UslugiSobr />} />
    </Routes>
    <Footer />
</HashRouter>
</>
  );
}

export default App;
