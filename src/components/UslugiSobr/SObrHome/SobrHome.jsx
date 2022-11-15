import React from 'react'
import { Link } from 'react-router-dom'
import './sobrHome.css'
import {getText} from '../../locales/index'

export default function SobrHome() {
  return (
    <>
    <div className="sobrhome">
        <div className="container">
            <div className="row">
            <div className="home_text">
            <h1>
            {getText("sbor1")}
            </h1>
            <p>{getText("sbor2")}</p>
            <div className="for_home_btns">
              <button>{getText("sbor3")}</button>
              <Link style={{textDecoration: " none"}} to='/dostavka'><button className='btn_sledit'>{getText("sbor4")}</button></Link>
            </div>
          </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
