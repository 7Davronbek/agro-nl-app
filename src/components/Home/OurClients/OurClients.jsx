import React from 'react'
import './ourClients.css'
import SwipeClient from './SwipeClient/SwipeClient'
import PauseOnHover from './SwipeClient/SwipeClient'
import SwiperClients from './SwipeClient/SwipeClient'
import {getText} from '../../locales/index';

export default function OurClients() {
  return (
    <>
    <div className="ourclients">
        <div className="container">
            <div className="row">
                <h1 className='type_header'>{getText("clients1")}</h1>
                <SwipeClient />
            </div>
        </div>
    </div>
    
    </>
  )
}
