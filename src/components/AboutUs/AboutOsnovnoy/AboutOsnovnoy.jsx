import React from 'react'
import './aboutOsnovnoy.css';
import Osnovnoy from '../../../image/Rectangle 647.png'
import {getText} from '../../locales/index'

export default function AboutOsnovnoy() {
  return (
    <>
    <div className="aboutosnovnoy">
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <h3 data-aos="fade-up">{getText("abouthome6")}</h3>
                    <p data-aos="fade-up">{getText("abouthome7")}</p>
                </div>
                <div className="col-10 mx-auto">
                    <div className="osnovnoy_div">
                        <img data-aos="fade-up" src={Osnovnoy} alt="" />
                        <p data-aos="fade-up">{getText("abouthome8")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
