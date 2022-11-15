import React from 'react'
import './sobrText.css'
import sobrimage from '../../../image/Rectangle 10000.png'
import sobrimage2 from '../../../image/Rectangle 1002.png'
import sobrimage3 from '../../../image/Rectangle 1231.png'
import { Link } from 'react-router-dom'
import Morsk_Img from '../../../image/image 3 (2).png'
import Avto_Img from '../../../image/image 3.png'
import {getText} from '../../locales/index'

export default function SobrText() {
    return (
        <>
            <div className="sobrtext">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1>
                                {getText("sbor5")}
                            </h1>
                            <div className="row">
                                <div className="col-lg-12 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p>{getText("sbor6")}</p>
                                        </div>
                                        <div className="col-lg-6">
                                            <img src={sobrimage} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="typesobr">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1>{getText("sbor7")}</h1>
                            <p>{getText("sbor8")}</p>
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <img src={sobrimage2} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="vozmojnosti">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1>{getText("sbor9")}</h1>
                            <div className="row">
                                <div className="col-lg-12 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="liststyle">
                                                <ul>
                                                    <li><p>{getText("sbor10")}</p></li>
                                                    <li><p>{getText("sbor11")}</p></li>
                                                </ul>

                                                <ul>
                                                    <li><p>{getText("sbor12")}</p></li>
                                                    <li><p>{getText("sbor13")}</p></li>
                                                </ul>
                                                <ul>
                                                    <li><p>{getText("sbor14")}</p></li>
                                                    <li><p>{getText("sbor15")}</p></li>
                                                </ul>
                                                <ul>
                                                    <li><p>{getText("sbor16")}</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <img src={sobrimage3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="otehr">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 mx-auto">
                                        <h1 className='other_h1'>{getText("sbor17")}</h1>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                        
                                        <h1>{getText("sbor18")}</h1>
                                        <p>{getText("sbor19")}</p>
                                        <Link to='/morsk'><button>{getText("sbor20")}</button></Link>
                                        <img src={Morsk_Img} alt="" />
                                    
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="cards carslt_txet">
                                                        <h1>{getText("sbor21")}</h1>
                                        <p>{getText("sbor22")}</p>
                                        <Link to='/truck'><button>{getText("sbor20")}</button></Link>
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

        </>
    )
}
