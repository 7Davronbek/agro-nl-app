import React, { useState } from 'react'
import './obratnayaSvyaz.css'
import { getText } from '../../locales/index'
import axios from 'axios'
import { API_PATH } from '../../tools/constabts'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function ObratnayaSvyaz() {


    const [there, setThere] = useState('')
    const [where, setWhere] = useState('')
    const [kg, setKg] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [show, setShow] = useState(false);

    const postContact = async (e) => {
        e.preventDefault()
        await axios.post(API_PATH + '/contact/', { there, where, kg, phone, message })
            .then((res) => {
                console.log(res);
                setShow(true)
                setThere('')
                setWhere('')
                setKg('')
                setPhone('')
                setMessage('')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div data-aos="fade-up" className="obratnayasvayz">
                <div className="container">


                    {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
                    <form onSubmit={postContact} className='row'>

                        <h1 className='type_header'>{getText("contactClient12")}</h1>
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="obratnaya_input">
                                    <input value={there} onChange={e => setThere(e.target.value)} placeholder='Откуда' type="text" />
                                    <input value={where} onChange={e => setWhere(e.target.value)} placeholder='Куда' type="text" />
                                    <input value={kg} onChange={e => setKg(e.target.value)} placeholder='Общий вес груза' type="text" />
                                    <input value={phone} onChange={e => setPhone(e.target.value)} placeholder='Номер телефона' type="number" />
                                    <textarea value={message} onChange={e => setMessage(e.target.value)} required="none" placeholder='Дополнительная информация груза' />
                                    {!show ? <button type='submit'>{getText("contactClient13")}</button> : ''}
                                </div>
                            </div>
                        </div>

                    </form>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <Alert className='mt-4' show={show} variant="success">
                                <Alert.Heading className='d-flex justify-content-center'>Отправлено!</Alert.Heading>
                                <p>

                                </p>
                                <hr />
                                <div className="d-flex justify-content-center">
                                    <Button onClick={() => setShow(false)} variant="outline-success">
                                        Закрыть!
                                    </Button>
                                </div>
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
