import React from 'react'
import { Link } from 'react-router-dom';
import './aviaHome.css';
import {getText} from '../../locales/index'

export default function AviaHome() {
  return (
    <>
     <div className="aviaHome">
        <div className="container">
            <div className="row">
            <div className="home_text">
            <h1>
            {getText("avia1")}
            </h1>
            <p>{getText("avia2")}</p>
            <div className="for_home_btns">
              <button>{getText("avia3")}</button>
              <Link style={{textDecoration: " none"}} to='/dostavka'><button className='btn_sledit'>{getText("avia4")}</button></Link>
            </div>
          </div>
            </div>
        </div>
    </div>
    </>
  )
}
