import React from 'react'
import './afterDalee.css'
import { getText } from '../locales/index'
import { useEffect } from 'react'
import { API_PATH, ID_INFO } from '../tools/constabts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function AfterDalee() {
  const navigate = useNavigate()
  const [id, setId] = useState([])
  const getInfo = async () => {
    if (!localStorage.getItem(ID_INFO)) {
      navigate('/dostavka', { replace: true })
    } else {
      await axios.get(API_PATH + `/deleivery/?id_number=${localStorage.getItem(ID_INFO)}`)
        .then((res) => {
          setId(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  useEffect(() => {
    getInfo()
  }, [])
  return (
    <>
      <div className="afterdalee">
        <div className="container">
          <div className="row">
            <div className="after_daless">
              <h1>{getText("otsleditdostavku1")}</h1>
              {id && id.map((item, index) => (
                <div key={index}>
                  <input className='mb-4' type="text" disabled placeholder={`Введить ID номер ${item.id_number} `} />
                  <input className='mb-4' type="text" disabled placeholder={`Информации о грузе ${item.information} `} />
                  <input className='mb-4' type="text" disabled placeholder={`Местоположение груза ${item.location} `} />
                  <input className='mb-4' type="text" disabled placeholder={`Доп инф. ${item.detail} `} />
                </div>
              ))}
              {/* {id.length > 0 && { ...id } && <>
                <input type="text" disabled placeholder={`Введить ID номер ${id.id_number} `} />
                <input type="text" disabled placeholder={`Информации о грузе  ${id.information}`} />
                <input type="text" disabled placeholder={`Местоположение груза  ${id.location}`} />
                <input type="text" disabled placeholder={`Доп инф.  ${id.detail}`} />
              </>} */}
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
