import React from 'react'
import './aboutContainer.css'
import AboutImg from '../../../image/Rectangle 645.png'
import {getText} from '../../locales/index'

export default function AboutContainer() {
  return (
    <>
    <div className="aboutcontainer">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1  data-aos="fade-up">{getText("navbar1")}</h1>
                        </div>
                        <div className="col-lg-4">
                            <p  data-aos="fade-up">{getText("abouthome2")}</p>
                        </div>
                        <div className="col-lg-4">
                            <p  data-aos="fade-up" >{getText("abouthome3")}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 mx-auto">
                    <img data-aos="fade-right" src={AboutImg} alt="" />
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
