import React from 'react'
import './afterDalee.css'
import {getText} from '../locales/index'

export default function AfterDalee() {
  return (
    <>
    <div className="afterdalee">
        <div className="container">
            <div className="row">
                <div className="after_daless">
                    <h1>{getText("otsleditdostavku1")}</h1>
                    <input type="text" placeholder='Введить ID номер'/>
                    <input type="text"  placeholder='Информации о грузе'/>
                    <input type="text" placeholder='Местоположение груза'/>
                    <input type="text" placeholder='Доп. Инфо +998 90 123-45-67' />
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
