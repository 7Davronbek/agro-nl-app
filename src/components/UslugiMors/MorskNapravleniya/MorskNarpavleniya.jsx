import React from 'react'
import './napravleniya.css';
import Avia_Img from '../../../image/image 3 (1).png'
import JD_Img from '../../../image/image 3 (3).png'
import { Link } from 'react-router-dom';
import maps from '../../../image/Group 9583.png'
import {getText} from '../../locales/index'


export default function MorskNarpavleniya() {
    return (
        <>
            <div className="napavleniyamork">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 data-aos="fade-up">
                                {getText("morsk5")}
                            </h1>
                            <p data-aos="fade-up">{getText("morsk6")}</p>
                        </div>
                        <div className="col-lg-10">
                            <h2 data-aos="fade-up">{getText("morsk7")}</h2>
                        </div>
                        <hr />
                        <div className="col-lg-10 mx-auto">
                            <div data-aos="fade-up" className="map_mors">
                                <img src={maps} alt="" />
                            </div>
                        </div>
                        <hr />
                        <div className="col-lg-10 mx-auto">
                            <p data-aos="fade-up" className='buduci'>{getText("morsk8")}</p>
                        </div>
                    </div>
                </div>

                <div className="otehr">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 mx-auto">
                                        <h1 className='other_h1 '>{getText("morsk9")}</h1>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                            <h1>{getText("morsk10")}</h1>
                                                            <p>{getText("morsk11")}</p>
                                                            <Link to='/avia'><button>{getText("morsk12")}</button></Link>
                                                            <img src={Avia_Img} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                            <h1>{getText("morsk13")}</h1>
                                                            <p>{getText("morsk14")}</p>
                                                            <Link to='/jd'><button>{getText("morsk12")}</button></Link>
                                                            <img src={JD_Img} alt="" />
                                                        </div>
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
