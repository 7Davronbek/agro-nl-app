import React from 'react'
import './jsuslug.css';
import jduxlugi from '../../../image/Rectangle 946.png'
import Morsk_Img from '../../../image/image 3 (2).png'
import Avto_Img from '../../../image/image 3.png'
import { Link } from 'react-router-dom';
import {getText} from '../../locales/index'


export default function JDuslug() {
    return (
        <>
            <div className="jduslug">
                <div className="container">
                    <div className="row">
                        <h1 data-aos="fade-up">{getText("jd5")}</h1>
                        <hr />
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-5">
                                    <p data-aos="fade-up">{getText("jd6")}</p>
                                </div>
                                <div className="col-lg-7">
                                    <div data-aos="fade-up" className="left_jd_uslug">
                                        <span>{getText("jd7")}</span>
                                        <span>{getText("jd8")}</span>
                                        <span>{getText("jd9")}</span>
                                        <span>{getText("jd10")}</span>
                                        <span>{getText("jd11")}</span>
                                        <span>{getText("jd12")}</span>
                                        <span>{getText("jd13")}</span>
                                        <a href="#">{getText("jd14")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mporter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 data-aos="fade-up">{getText("jd15")}</h1>
                                </div>
                                <div className="col-lg-6">
                                    <p data-aos="fade-up">{getText("jd16")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <img data-aos="fade-up" src={jduxlugi} alt="" />
                        </div>
                    </div>
                </div>


                <div className="otehr jdother">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className='other_h1'>{getText("jd17")}</h1>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="cards carslt_txet">

                                                    <h1>{getText("jd18")}</h1>
                                                    <p>{getText("jd19")}</p>
                                                    <Link to='/morsk'><button>{getText("jd20")}</button></Link>
                                                    <img src={Morsk_Img} alt="" />

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="cards carslt_txet">
                                                    <h1>{getText("jd21")}</h1>
                                                    <p>{getText("jd22")}</p>
                                                    <Link to='/truck'><button>{getText("jd20")}</button></Link>
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

        </>
    )
}
