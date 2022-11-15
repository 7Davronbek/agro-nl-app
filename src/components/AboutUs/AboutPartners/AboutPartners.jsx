import React from 'react'
import './AboutPartners.css';
import AbputPartners from '../../../image/Rectangle 646.png'
import {getText} from '../../locales/index'

export default function AboutPartners() {
  return (
    <>
    <div className="aboutPartners">
        <div className="container">
            <div className="row">
                <h1 className='type_header' data-aos="fade-up">{getText("abouthome4")}</h1>
                <div className="col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-8">
                            <img data-aos="fade-up" src={AbputPartners} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <p data-aos="fade-up">{getText("abouthome5")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
