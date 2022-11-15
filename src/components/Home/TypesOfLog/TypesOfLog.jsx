import React from 'react'
import './typesOfLog.css';
import Avto_Img from '../../../image/image 3.png'
import Morsk_Img from '../../../image/image 3 (2).png'
import Opas_Img from '../../../image/image 3 (4).png'
import Avia_Img from '../../../image/image 3 (1).png'
import JD_Img from '../../../image/image 3 (3).png'
import Tomoj_Img from '../../../image/image 3 (5).png'
import { Link } from 'react-router-dom';
import {getText} from '../../locales/index'

export default function TypesOfLog() {
    return (
        <>
            <div className="typesoflog">
                <div className="container">
                    <div className="row">
                        <h1 className='type_header'>{getText("types1")}</h1>
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div data-aos="fade-up" className="cards">
                                        <h1>{getText("types12")}</h1>
                                        <p>{getText("types13")}</p>
                                        <Link to='/truck'><button>{getText("types14")}</button></Link>
                                        <img src={Avto_Img} alt="" />
                                    </div>
                                    <div  data-aos="fade-up" className="cards">
                                        <h1>{getText("types15")}</h1>
                                        <p>{getText("types16")}</p>
                                        <Link to='/morsk'><button>{getText("types14")}</button></Link>
                                        <img src={Morsk_Img} alt="" />
                                    </div>
                                    <div  data-aos="fade-up" className="cards">
                                        <h1>{getText("types17")}</h1>
                                        <p>{getText("types18")}</p>
                                        <Link to='/opasniye'><button>{getText("types14")}</button></Link>
                                        <img src={Opas_Img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div  data-aos="fade-up" className="cards">
                                        <h1>{getText("types19")}</h1>
                                        <p>{getText("types20")}</p>
                                        <Link to='/avia'><button>{getText("types14")}</button></Link>
                                        <img src={Avia_Img} alt="" />
                                    </div>
                                    <div  data-aos="fade-up" className="cards">
                                        <h1>{getText("types21")}</h1>
                                        <p>{getText("types22")}</p>
                                        <Link to='/jd'><button>{getText("types14")}</button></Link>
                                        <img src={JD_Img} alt="" />
                                    </div>
                                    <div  data-aos="fade-up" className="cards">
                                        <h1>{getText("types23")}</h1>
                                        <p>{getText("types24")}</p>
                                        <Link to='/truck'><button>{getText("types14")}</button></Link>
                                        <img src={Tomoj_Img} alt="" />
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
