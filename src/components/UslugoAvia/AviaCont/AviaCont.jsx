import React from 'react'
import './aviacontent.css'
import carslt from '../../../image/Rectangle 845.png'
import carsltz from '../../../image/Rectangle 846.png'
import Morsk_Img from '../../../image/image 3 (2).png'
import Avto_Img from '../../../image/image 3.png'
import { Link } from 'react-router-dom'
import {getText} from '../../locales/index'



export default function AviaCont() {
    return (
        <>
            <div className="carslt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 data-aos="fade-right">{getText("avia5")}</h1>
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <div className="ltz">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p data-aos="fade-right">{getText("avia6")}</p>
                                        <p data-aos="fade-right">{getText("avia7")}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img data-aos="fade-left" src={carslt} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="preimushestvo">
                            <div className="col-lg-10 mx-auto">
                                <h1 data-aos="fade-up">{getText("avia8")}</h1>
                                <div className="row">

                                    <div className="col-lg-6">
                                        <p data-aos="fade-up">{getText("avia9")}</p>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="ul_table">
                                                        <ul data-aos="fade-up">
                                                            <li><p>{getText("avia10")}</p></li>
                                                            <li className='frst_li'><p>{getText("avia10")}</p></li>
                                                        </ul>
                                                        <ul>
                                                            <li><p>{getText("avia12")}</p></li>
                                                            <li><p>{getText("avia13")}</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <img data-aos="fade-up" src={carsltz} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="otehr">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 mx-auto">
                                        <h1 className='other_h1'>{getText("avia14")}</h1>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                        
                                        <h1>{getText("avia15")}</h1>
                                        <p>{getText("avia16")}</p>
                                        <Link to='/morsk'><button>{getText("avia17")}</button></Link>
                                        <img src={Morsk_Img} alt="" />
                                    
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                        <h1>{getText("avia18")}</h1>
                                        <p>{getText("avia19")}</p>
                                        <Link to='/truck'><button>{getText("avia17")}</button></Link>
                                        <img src={Avto_Img} alt="" />
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
                </div>
            </div>

        </>
    )
}
