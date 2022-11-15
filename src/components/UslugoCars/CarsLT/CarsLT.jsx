import React from 'react'
import './carslts.css'
import carslt from '../../../image/Rectangle 722.png'
import carsltz from '../../../image/Rectangle 746.png'
import Avia_Img from '../../../image/image 3 (1).png'
import JD_Img from '../../../image/image 3 (3).png'
import { Link } from 'react-router-dom'
import {getText} from '../../locales/index'


export default function CarsLT() {
    return (
        <>
            <div className="carslt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 data-aos="fade-right">{getText("avto4")}</h1>
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <div className="ltz">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p data-aos="fade-right">{getText("avto5")}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img data-aos="fade-left" src={carslt} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="preimushestvo">
                            <div className="col-lg-10 mx-auto">
                                <h1 data-aos="fade-right">{getText("avto6")}</h1>
                                <div className="row">

                                    <div className="col-lg-6">
                                        <p data-aos="fade-right">{getText("avto7")}</p>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="ul_table">
                                                        <ul data-aos="fade-up" >
                                                            <li><p>{getText("avto8")}</p></li>
                                                            <li className='frst_li'><p>{getText("avto9")}</p></li>
                                                        </ul>
                                                        <ul>
                                                            <li><p>{getText("avto10")}</p></li>
                                                            <li><p>{getText("avto11")}</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <img data-aos="fade-left" src={carsltz} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="otehr">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 mx-auto">
                                        <h1 className='other_h1'>{getText("avto12")}</h1>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                            <h1>{getText("avto13")}</h1>
                                                            <p>{getText("avto14")}</p>
                                                            <Link to='/avia'><button>{getText("otdelnews2")}</button></Link>
                                                            <img src={Avia_Img} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                            <h1>{getText("avto15")}</h1>
                                                            <p>{getText("avto16")}</p>
                                                            <Link to='/jd'><button>{getText("otdelnews2")}</button></Link>
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
                </div>
            </div>

        </>
    )
}
