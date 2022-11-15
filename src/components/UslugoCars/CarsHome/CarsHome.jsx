import React from 'react'
import { Link } from 'react-router-dom'
import './cars.css'
import {getText} from '../../locales/index'

export default function CarsHome() {
  return (
    <>
    <div className="carshome">
        <div className="container">
            <div className="row">
            <div className="home_text">
            <h1>
            {getText("avto")}
            </h1>
            <p> {getText("avto1")}</p>
            <div className="for_home_btns">
              <button> {getText("avto2")}</button>
              <Link style={{textDecoration: " none"}} to='/dostavka'><button className='btn_sledit'>{getText("avto")}</button></Link>
            </div>
          </div>
            </div>
        </div>
    </div>
    </>
  )
}
