import React from 'react'
import './Opashome.css'
// import Opasimg from '../../../image/Без имени-1 1.png'
import { Link } from 'react-router-dom'
import { getText } from '../../locales/index'

export default function OpasHome() {
    return (
        <>
            <div className="opashome">
                <div className="container">
                    <div className="row">
                        <div className="flex_opas">
                            <div className="home_text">
                                <h1>
                                    {getText("opas1")}
                                </h1>
                                <p>{getText("opas2")}</p>
                                <div className="for_home_btns">
                                    <button>{getText("opas3")}</button>
                                    <Link style={{ textDecoration: " none" }} to='/dostavka'><button className='btn_sledit'>{getText("opas4")}</button></Link>
                                </div>
                            </div>

                            {/* <img src={Opasimg} alt="" /> */}

                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
