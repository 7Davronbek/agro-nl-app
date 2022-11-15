import React from 'react'
import './footer.css'
import Logo_Footer from '../../../image/Group 9466.png'
import FB from '../../../image/1491580635-yumminkysocialmedia26_83102.png'
import TG from '../../../image/facebook_icon-icons.png'
import Insta from '../../../image/telegram_icon-icons.png'
import  {getText} from '../../locales/index';

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mx-auto ">
                    <div className="obshiy_footer">
                    <div className="row">
                        <div className="col-lg-3 ">
                            <img className='foot_login' src={Logo_Footer} alt="" />
                        </div>
                        <div className="col-lg-2 col-6" >
                            <div className="navigation">
                            <h4>{getText("footer1")}</h4>
                            <p>{getText("navbar1")}</p>
                            <p>{getText("navbar8")}</p>
                            <p>{getText("footer3")}</p>
                            <p>{getText("navbar10")}</p>
                            <p>{getText("navbar9")}</p>
                            <p>{getText("navbar11")}</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="navigation">
                            <h4>{getText("navbar8")}</h4>
                            <p>{getText("types12")}</p>
                            <p>{getText("types19")}</p>
                            <p>{getText("types15")}</p>
                            <p>{getText("types21")}</p>
                            <p>{getText("types17")}</p>
                            <p>{getText("types23")}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="navigation">
                            <h4>{getText("navbar10")}</h4>
                            <a href="#">+998 (97) 463-66-88</a>
                            <br />
                            <a href="#">support@gmail.com</a>
                            <br />
                            <a href="#">{getText("footer4")}</a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="navigation">
                            <h4>{getText("footer2")}</h4>
                            <img src={FB} alt="" />
                            <img src={Insta} alt="" />
                            <img src={TG} alt="" />
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
