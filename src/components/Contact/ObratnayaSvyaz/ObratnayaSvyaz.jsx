import React from 'react'
import './obratnayaSvyaz.css'
import {getText} from '../../locales/index'

export default function ObratnayaSvyaz() {
  return (
   <>
   <div data-aos="fade-up" className="obratnayasvayz">
       <div className="container">
           <div className="row">
               <h1 className='type_header'>{getText("contactClient12")}</h1>
               <div className="col-10 mx-auto">
                   <div className="row">
                       <div className="obratnaya_input">
                       <input placeholder='Откуда' type="text" />
                       <input placeholder='Куда' type="text" />
                       <input placeholder='Общий вес груза' type="text" />
                       <input placeholder='Номер телефона' type="text" />
                       <textarea required="none" placeholder='Дополнительная информация груза' />
                       <button>{getText("contactClient13")}</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   </>
  )
}
