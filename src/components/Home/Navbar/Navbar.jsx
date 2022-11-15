import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Modaller from './Modal';
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { getLanguage, getText } from '../../locales/index';
import {LANGUAGE} from '../../tools/constabts'


export default function Navbar({ showModalHandler }) {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [burger, setBurger] = useState(false);

  
  const [header, setHeader] = useState([])
  const changeLanguage = (e) => {
      localStorage.setItem(LANGUAGE, e.target.value)
      document.location.reload(true)
  }


  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  window.addEventListener('scroll', changeNavbar);
  const location = useLocation()



  const toggleModal = () => {
    console.log("work");
    showModalHandler(true)
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <>
      <div className={`Navbar ${navbar ? `active` : ``}`}>
        <nav ref={navRef}>
          <div className="container">
            <div className="row justify-content-between align-items-center" >
              <div className="col-2">
                <Link to="/"><img src="/images/Group 9462.png" alt="" className="nav_logo" /></Link>
              </div>
              <div className="d-lg-flex d-none col-lg-8">
                <div className="ul_navbar">
                  <ul ref={navRef}>
                    <Link style={{ textDecoration: "none" }} to="/about"><li>{getText("navbar1")}</li></Link>
                    <li className='do_mobile'>
                      <Link style={{ textDecoration: "none", color: "#363a4d", marginBottom: "50px" }} to="/truck"><Dropdown.Item href="#/action-1">{getText("navbar2")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/avia'><Dropdown.Item href="#/action-2">{getText("navbar3")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/jd'><Dropdown.Item href="#/action-3">{getText("navbar4")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/morsk'> <Dropdown.Item href="#/action-3">{getText("navbar5")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/opasniye'><Dropdown.Item href="#/action-3">{getText("navbar6")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/sobr'><Dropdown.Item href="#/action-3"></Dropdown.Item>{getText("navbar7")}</Link>
                      
                    </li>

                    <li>
                      <Dropdown className='dropdowning'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {getText("navbar8")}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Link style={{ textDecoration: "none" }} to="/truck"><Dropdown.Item href="#/action-1">{getText("navbar2")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/avia'><Dropdown.Item href="#/action-2">{getText("navbar3")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/jd'><Dropdown.Item href="#/action-3">{getText("navbar4")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/morsk'> <Dropdown.Item href="#/action-3">{getText("navbar5")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/opasniye'><Dropdown.Item href="#/action-3">{getText("navbar6")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/sobr'><Dropdown.Item href="#/action-3">{getText("navbar7")}</Dropdown.Item></Link>
                         
                        </Dropdown.Menu>
                      </Dropdown></li>
               
                    <Link style={{ textDecoration: "none" }} to='/contact'><li className='contacts_lizing'>{getText("navbar10")}</li></Link>
                    <Link style={{ textDecoration: "none" }} to='news'><li>{getText("navbar9")}</li></Link>
                    <Link style={{ textDecoration: "none" }} to='/dostavka'><li><button className='slejeniya'>{getText("navbar11")}</button></li></Link>
                    <select onChange={changeLanguage}>
                                        <option value="ru" selected={getLanguage() === "ru"} >РУ</option>
                                        <option value="en" selected={getLanguage() === "en"} >EN</option>
                                    </select>
                    
                  </ul>

                </div>

              </div>
              <div className="d-lg-flex d-none col-lg-2">

                <div className="obratnaya_line">


                  <button className='btn_svyaz btn-modal'
                    onClick={toggleModal} >
                    {getText("navbar12")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <div className={`burger ${burger ? `active` : ``}`}>
            <GrClose className='close_the_respons' />
            <div className="ul_navbar">
                  <ul ref={navRef}>
                    <Link style={{ textDecoration: "none" }} to="/about"><li>{getText("navbar1")}</li></Link>
                    <li className='do_mobile'>
                      <Link style={{ textDecoration: "none", color: "#363a4d", marginBottom: "50px" }} to="/truck"><Dropdown.Item href="#/action-1">{getText("navbar2")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/avia'><Dropdown.Item href="#/action-2">{getText("navbar3")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/jd'><Dropdown.Item href="#/action-3">{getText("navbar4")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/morsk'> <Dropdown.Item href="#/action-3">{getText("navbar5")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/opasniye'><Dropdown.Item href="#/action-3">{getText("navbar6")}</Dropdown.Item></Link>
                      <Link style={{ textDecoration: "none", color: "#363a4d" }} to='/sobr'><Dropdown.Item href="#/action-3"></Dropdown.Item>{getText("navbar7")}</Link>

                      
                    </li>

                    <li>
                      <Dropdown className='dropdowning'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {getText("navbar8")}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Link style={{ textDecoration: "none" }} to="/truck"><Dropdown.Item href="#/action-1">{getText("navbar2")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/avia'><Dropdown.Item href="#/action-2">{getText("navbar3")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/jd'><Dropdown.Item href="#/action-3">{getText("navbar4")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/morsk'> <Dropdown.Item href="#/action-3">{getText("navbar5")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/opasniye'><Dropdown.Item href="#/action-3">{getText("navbar6")}</Dropdown.Item></Link>
                          <Link style={{ textDecoration: "none" }} to='/sobr'><Dropdown.Item href="#/action-3">{getText("navbar7")}</Dropdown.Item></Link>
                        </Dropdown.Menu>
                      </Dropdown></li>

                    <Link style={{ textDecoration: "none" }} to='/contact'><li className='contacts_lizing'>{getText("navbar9")}</li></Link>
                    <Link style={{ textDecoration: "none" }} to='news'><li>{getText("navbar10")}</li></Link>
                    <Link style={{ textDecoration: "none" }} to='/dostavka'><li><button className='slejeniya'>{getText("navbar11")}</button></li></Link>
                    <select className='do_mobiling' onChange={changeLanguage}>
                                        <option value="ru" selected={getLanguage() === "ru"} >РУ</option>
                                        <option value="uz" selected={getLanguage() === "uz"} >UZ</option>
                                    </select>
                  </ul>

                </div>
              <div className="obratnaya_line">


                <button className='btn_svyaz btn-modal'
                  onClick={toggleModal} >
                  {getText("navbar12")}
                </button>
              </div>
             
              
            </div>
          </button>
        </nav>
        <div className="for_lg_logo">
              <Link to="/"><img src="/images/Group 9462.png" alt="" /></Link>
              </div>
        <button className="nav-btn" onClick={showNavbar}>
       
          <HiMenuAlt3 />
        </button>
      </div>

    </>
  )
}
