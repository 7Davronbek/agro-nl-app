import React from 'react'
import { Link } from 'react-router-dom';
import './otsleditDostavku.css';
import {getText} from '../locales/index'

export default function OTsleditDostavku() {
  return (
    <>
    <div className="otsleditdostavku">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-10 mx-auto">
                <div className="otsledit_dotavku_text">
                <h1>{getText("otsleditdostavku2")}</h1>
                    <input type="text" placeholder='Введите ID номер' />
                    <Link style={{textDecoration: "none"}} to='/IDinfo'><button>{getText("otsleditdostavku2")}</button></Link>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
