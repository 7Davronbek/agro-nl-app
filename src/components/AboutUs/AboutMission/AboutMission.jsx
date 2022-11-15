import React from 'react'
import './AboutMission.css'
import MissionImg from '../../../image/Rectangle 648.png'
import Mission from '../../../image/Rectangle 649.png'
import {getText} from '../../locales/index'

export default function AboutMission() {
  return (
    <>
    <div className="aboutmission">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-10 mx-auto">
                <h1 data-aos="fade-up">{getText("abouthome9")}</h1>
                    <p data-aos="fade-up">{getText("abouthome10")}</p>
                </div>
                <div className="col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-7">
                            <img data-aos="fade-up" src={MissionImg} alt="" />
                        </div>
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img data-aos="fade-up" src={Mission} alt="" />
                                </div>
                                <div className="col-lg-12">
                                   <div className="text_col">
                                   <p data-aos="fade-up">{getText("abouthome11")}</p>
                                   </div>
                                </div>
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
