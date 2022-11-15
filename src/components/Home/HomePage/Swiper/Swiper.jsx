import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import './swiper.css'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../homePage.css';

import Photo_1 from '../../../../image/Rectangle 3.png'

import { Autoplay, Pagination, Navigation } from "swiper";
import {getText} from '../../../locales'

export default function SwiperHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_background_1">
          <div className="home_text">
            <h1>
              {getText("swiper11")}
            </h1>
            <p>{getText("swiper12")}</p>
            <div className="for_home_btns">
              <button>{getText("navbar12")}</button>
              <button>{getText("navbar11")}</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_background_2">
          <div className="home_text">
            <h1>
            {getText("swiper21")}
            </h1>
            <p>{getText("swiper22")}</p>
            <div className="for_home_btns">
            <button>{getText("navbar12")}</button>
              <button>{getText("navbar11")}</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_background_3">
          <div className="home_text">
            <h1>
            {getText("swiper31")}
            </h1>
            <p>{getText("swiper32")}</p>
            <div className="for_home_btns">
            <button>{getText("navbar12")}</button>
              <button>{getText("navbar11")}</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_background_4">
          <div className="home_text">
            <h1>
            {getText("swiper41")}
            </h1>
            <p>{getText("swiper42")}</p>
            <div className="for_home_btns">
            <button>{getText("navbar12")}</button>
              <button>{getText("navbar11")}</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_background_5">
          <div className="home_text">
            <h1>
            {getText("swiper51")}
            </h1>
            <p>{getText("swiper52")}</p>
            <div className="for_home_btns">
            <button>{getText("navbar12")}</button>
              <button>{getText("navbar11")}</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_background_6">
          <div className="home_text">
            <h1>
            {getText("swiper61")}
            </h1>
            <p>{getText("swiper62")}</p>
            <div className="for_home_btns">
            <button>{getText("navbar12")}</button>
              <button>{getText("navbar11")}</button>
            </div>
          </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
