import React from 'react'
import './aboutHome.css';
import {getText} from '../../locales/index'

export default function AboutHome() {
  return (
    <>
    <div className="aboutuspage">
      <div className="container">
        <div className="row">
          <div className="aboutpage_etxt">
            <h1 className=''>{getText("abouthome1")}</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
