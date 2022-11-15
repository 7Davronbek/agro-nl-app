import React from 'react'
import './UslugHome.css';
import Usl_1 from '../../../image/file 1.png'
import Usl_2 from '../../../image/check-mark 1.png'
import Usl_3 from '../../../image/magnifying-glass 1.png'
import Usl_4 from '../../../image/delivery-truck 1.png'
import Usl_5 from '../../../image/speech-bubble 1.png'
import Usl_6 from '../../../image/like 1.png'
import Usl_7 from '../../../image/credit-card 1.png'
import Usl_8 from '../../../image/stack 1.png'
import {getText} from '../../locales/index';

export default function UslugHome() {
  return (
    <>
    <div className="uslugHome">
        <div className="container">
            <div className="row">
                    <h1 className='uslug_text'>{getText("why1")}</h1>
                    <div className="col-lg-10 mx-auto">
                        <div className="row">
                        <div className="col-lg-3 col-6">
                            <div data-aos="fade-right" className="card_uslugi">
                            <div className="overline_line">
                            <div className="overline">
                            <img src={Usl_1} alt="" />
                            </div>
                            </div>
                            <p>{getText("why2")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div data-aos="fade-right" className="card_uslugi">
                           <div className="overline_line">
                               <div className="overline">
                               <img src={Usl_2} alt="" />
                               </div>
                           </div>
                           <p>{getText("why3")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div data-aos="fade-left" className="card_uslugi">
                            <div className="overline_line">
                                <div className="overline">
                                <img src={Usl_3} alt="" />
                                </div>
                            </div>
                            <p>{getText("why4")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div data-aos="fade-left" className="card_uslugi">
                            <div className="overline_line">
                                <div className="overline">
                                <img src={Usl_4} alt="" />
                                </div>
                            </div>
                            <p>{getText("why5")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-4">
                            <div data-aos="fade-right" className="card_uslugi">
                            <div className="overline_line">
                                <div className="overline">
                                <img src={Usl_5} alt="" />
                                </div>
                            </div>
                            <p>{getText("why6")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-4">
                            <div data-aos="fade-right" className="card_uslugi">
                            <div className="overline_line">
                                <div className="overline">
                                <img src={Usl_6} alt="" />
                                </div>
                            </div>
                            <p>{getText("why7")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-4">
                            <div data-aos="fade-left" className="card_uslugi">
                            <div className="overline_line">
                                <div className="overline">
                                <img src={Usl_7} alt="" />
                                </div>
                            </div>
                            <p>{getText("why8")}</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-3 col-6 mt-4">
                            <div className="card_uslugi">
                            <div className="overline_line">
                                <div className="overline">
                                <img src={Usl_8} alt="" />
                                </div>
                            </div>
                            <p>{getText("why9")}</p>
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
