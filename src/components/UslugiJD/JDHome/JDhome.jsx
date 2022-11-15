import React from 'react'
import { Link } from 'react-router-dom';
import './jdhome.css';
import {getText} from '../../locales/index'

export default function JDhome() {
  return (
    <>
    <div className="jdhoe">
        <div className="container">
            <div className="row">
            <div className="home_text jd_text">
            <h1>
           {getText("jd1")}
            </h1>
            <p>{getText("jd2")}</p>
            <div className="for_home_btns">
              <button>{getText("jd3")}</button>
              <Link style={{textDecoration: " none"}} to='/dostavka'><button className='btn_sledit'>{getText("jd4")}</button></Link>
            </div>
          </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
