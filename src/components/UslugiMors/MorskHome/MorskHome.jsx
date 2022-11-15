import React from 'react'
import { Link } from 'react-router-dom'
import './morskHome.css'
import {getText} from '../../locales/index'

export default function MorskHome() {
  return (
    <>
    <div className="morskhome">
        <div className="container">
            <div className="row">
            <div className="home_text morsk_text">
            <h1>
            {getText("morsk1")}
            </h1>
            <p>{getText("morsk2")}</p>
            <div className="for_home_btns">
              <button>{getText("morsk3")}</button>
              <Link style={{textDecoration: " none"}} to='/dostavka'><button className='btn_sledit'>{getText("morsk4")}</button></Link>
            </div>
          </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
