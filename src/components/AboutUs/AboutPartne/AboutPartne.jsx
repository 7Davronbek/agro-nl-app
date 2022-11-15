import React from 'react'
import SwiperClients from '../../Home/OurClients/SwipeClient/SwipeClient'
import './AboutParte.css'
import {getText} from '../../locales/index'

export default function AboutPartne() {
  return (
    <>
    <div className="aboutpartne">
        <div className="container">
            <div className="row">
                <h1 className='type_header' data-aos="fade-up">{getText("abouthome4")}</h1>
                <div className="col-10 mx-auto">
                    <SwiperClients />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
