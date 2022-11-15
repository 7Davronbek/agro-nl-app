import React from 'react'
import './aboutUs.css'
import About_Img from '../../../image/medium-shot-delivery-man-holding-box 1.png'
import {getText} from '../../locales/index'

export default function AboutUs() {
    return (
        <>
            <div className="aboutUs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1  data-aos="fade-up" className='about_h1'>{getText("aboutus1")}</h1>
                                    <img  data-aos="fade-up" className='w-100' src={About_Img} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="text_about">
                                        <h1  data-aos="fade-up">{getText("aboutus2")}</h1>
                                        <p  data-aos="fade-up">{getText("aboutus3")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
