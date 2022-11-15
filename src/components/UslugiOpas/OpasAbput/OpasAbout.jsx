import React from 'react'
import './opasAbout.css'
import Avia_Img from '../../../image/image 3 (1).png'
import JD_Img from '../../../image/image 3 (3).png'
import { Link } from 'react-router-dom'
import {getText} from '../../locales/index'

export default function OpasAbout() {
    return (
        <>
            <div className="opasabout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <hr />
                                <div className="col-lg-6">
                                    <h4 data-aos="fade-up">{getText("opas5")}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <ul data-aos="fade-up">
                                        <li><p>{getText("opas6")}</p></li>
                                        <li><p>{getText("opas7")}</p></li>
                                        <li><p>{getText("opas8")}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="col-lg-10 mx-auto">
                            <p data-aos="fade-up">{getText("opas9")}</p>
                        </div>
                        <hr />

                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 data-aos="fade-up">{getText("opas10")}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <ul data-aos="fade-up">
                                        <li><p>{getText("opas11")}</p></li>
                                        <li><p>{getText("opas12")}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6">
                                    <h4 data-aos="fade-up" className='vestext'>{getText("opas13")}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h5 data-aos="fade-up">{getText("opas14")}</h5>
                                    <ul data-aos="fade-up">
                                        <li><p>{getText("opas15")}</p></li>
                                        <li><p>{getText("opas16")}</p></li>
                                        <li><p>{getText("opas17")}</p></li>
                                        <li><p>{getText("opas18")}</p></li>
                                        <li><p>{getText("opas19")}</p></li>
                                        <li><p>{getText("opas20")}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 data-aos="fade-up">{getText("opas21")}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <ul data-aos="fade-up">
                                        <li><p>{getText("opas22")}</p></li>
                                        <li><p>{getText("opas23")}</p></li>
                                        <li><p>{getText("opas24")}</p></li>
                                        <li><p>{getText("opas25")}</p></li>
                                        <li><p>{getText("opas26")}</p></li>
                                        <li><p>{getText("opas27")}</p></li>
                                        <li><p>{getText("opas28")}</p></li>
                                        <li><p>{getText("opas28")}</p></li>
                                        <li><p>{getText("opas30")}</p></li>
                                        <li><p>{getText("opas31")}</p></li>
                                        <li><p>{getText("opas32")}</p></li>
                                        <li><p>{getText("opas33")}</p></li>
                                        <li><p>{getText("opas34")}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>

                <div className="otehr opas_or">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className='other_h1 opas_other'>{getText("opas35")}</h1>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="cards carslt_txet">
                                                    <h1>{getText("opas36")}</h1>
                                                    <p>{getText("opas37")}</p>
                                                    <Link to='/avia'><button>{getText("opas38")}</button></Link>
                                                    <img src={Avia_Img} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="cards carslt_txet">
                                                    <h1>{getText("opas39")}</h1>
                                                    <p>{getText("opas40")}</p>
                                                    <Link to='/jd'><button>{getText("opas38")}</button></Link>
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
