import React from 'react'
import './contactMap.css';
import {getText} from '../../locales/index'

export default function ContactMap() {
  return (
    <>
    <div className="contactmap">
        <div className="container">
            <div className="row">
                <h1 className='type_header'>{getText("contactClient1")}</h1>
                <div className="col-lg-10 mx-auto">
                   <div className="map_cpnatct frst_map">
                   <div className="row">
                        <div className="col-lg-6">
                            <h1>{getText("contactClient2")}</h1>
                            <div className="row">
                                <div className="col-lg-12">
                                  <div className="row">
                                  <div className="col-lg-6">
                                        <h4>{getText("contactClient3")}</h4>
                                        <a href='https://yandex.uz/maps/10335/tashkent/house/YkAYdABnQEYGQFprfX9xdXpiYA==/?ll=69.277931%2C41.304615&z=16'>{getText("contactClient4")}</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>{getText("contactClient5")}</h4>
                                        <a href='tel: +998974636688'>{getText("contactClient6")}</a>
                                        <a href="tel:+998901552407"><br />{getText("contactClient7")}</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="gmail_pochta">
                                    <h4>{getText("contactClient9")}</h4>
                                    <a href="mailto:support@gmail.com" >{getText("contactClient8")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <iframe className='ifram_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.0501505802654!2d69.2828619739362!3d41.29238949291781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acb6f02d673%3A0x4c4c84e630132a26!2s!5e0!3m2!1sru!2s!4v1667586276089!5m2!1sru!2s" frameborder="0"></iframe>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-lg-10 mx-auto">
                <div data-aos="fade-up" className="map_cpnatct">
                   <div className="row">
                        <div className="col-lg-6">
                            <h1>{getText("contactClient10")}</h1>
                            <div className="row">
                                <div className="col-lg-12">
                                  <div className="row">
                                  <div className="col-lg-6">
                                        <h4>{getText("contactClient1")}</h4>
                                        <a href='https://yandex.uz/maps/geo/1494564110/?l=stv%2Csta&ll=69.336820%2C41.061260&z=11.3'>{getText("contactClient11")}</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <h4>{getText("contactClient5")}</h4>
                                        <a href='tel: +998974636688'>{getText("contactClient6")}</a>
                                        <a href="tel:+998901552407"><br />{getText("contactClient7")}</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="gmail_pochta">
                                    <h4>{getText("contactClient9")}</h4>
                                    <a href="mailto:support@gmail.com" >{getText("contactClient8")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <iframe className='ifram_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8181971411523!2d69.29327485584706!3d40.99963118825836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b364cff07270a7a!2zNDDCsDU5JzU1LjQiTiA2OcKwMTcnNDAuMiJF!5e0!3m2!1sru!2s!4v1667800834494!5m2!1sru!2s" frameborder="0" ></iframe>
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
