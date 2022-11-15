import React from 'react'
import { useNavigate } from 'react-router-dom';
import './otsleditDostavku.css';
import { getText } from '../locales/index'
import { useState } from 'react';
import { ID_INFO } from '../tools/constabts';

export default function OTsleditDostavku() {
  const [id, setId] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const post = () => {
    if (id) {
      localStorage.setItem(ID_INFO, id)
      navigate('/IDinfo', { replace: true })
    } else {
      setError(true)
    }
  }

  return (
    <>
      <div className="otsleditdostavku">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="otsledit_dotavku_text">
                <h1>{getText("otsleditdostavku2")}</h1>
                <input onChange={(e) => setId(e.target.value)} value={id} type="text" placeholder='Введите ID номер' />
                {error && <h5 style={{ color: 'red', textAlign: 'left !important' }} >Заполните поле </h5>}
                <button onClick={post}>{getText("otsleditdostavku2")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
