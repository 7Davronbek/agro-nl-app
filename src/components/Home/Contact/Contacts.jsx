import React from 'react'
import { Link } from 'react-router-dom';
import './contact.css';
import {getText} from '../../locales/index'

export default function Contacts() {
  return (
    <>
    <div className="contact">
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="contact_contain">
                  <div className="row">
                   <div className="col-lg-6">
                      <div  data-aos="fade-up" className="left_conatc">
                      <h1 className='contact_h1'>{getText("contact1")}</h1>
                      <div className="row">
                        <div className="col-lg-12">
                         <div className="row">
                         <div className="col-lg-6">
                            <h3>{getText("contact2")}</h3>
                            <a className='addres' href='https://yandex.uz/maps/10335/tashkent/house/YkAYdABnQEYGQFprfX9xdXpiYA==/?ll=69.277931%2C41.304615&z=16'>{getText("footer4")}</a>
                          </div>
                          <div className="col-lg-6">
                            <h3>{getText("contact3")}</h3>
                            <a href="tel:+998974636688">+998 (97) 463-66-88</a>
                            <a href="tel:+998901552407"> <br/> +998 (90) 155-24-07</a>
                          </div>
                         </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6">
                              <h3 className='pochta_contact'>{getText("contact4")}</h3>
                              <a href="mailto: support@gmail.com">support@gmail.com</a>
                            </div>
                            <div className="col-lg-6">
                              <Link to='/contact'><button>{getText("navbar12")}</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div  data-aos="fade-left" className="col-lg-6">
                    <iframe className='ifram_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.211947101897!2d69.29231931541369!3d40.998733979301655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b364cff07270a7a!2zNDDCsDU5JzU1LjQiTiA2OcKwMTcnNDAuMiJF!5e0!3m2!1sru!2s!4v1667509486260!5m2!1sru!2s" frameborder="0" ></iframe>
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
