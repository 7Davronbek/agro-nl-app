import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import {GrClose} from 'react-icons/gr'
import axios from 'axios';
import { API_PATH } from '../../tools/constabts';
import { getText } from '../../locales';

const Modal = ({hideModalHandler}) => {
  const [contact, setContact] = useState([])
  const [loader, setLoader] = useState(true)

  const [there, setThere] = useState('')
  const [where, setWhere] = useState('')
  const [kg, setKg] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const postContact = async (e) => {
    e.preventDefault()
    await axios.post(API_PATH + '/contact/', {there, where, kg, phone, message})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div className={styles.modal}>
       <div className="col-10 mx-auto">
       <div className={styles.container}>

          <form onSubmit={postContact} className="row">
          <div className={styles.content}>
            <div className="col-10 mx-auto">
              <div className={styles.text_content}>
               
               
              <h1>{getText("modal1")}  <GrClose className={styles.btn_ex}  onClick={hideModalHandler}/></h1>

                <input value={there} onChange={e => setThere(e.target.value)} type="text" placeholder='Откуда' required />
                <input value={where} onChange={e => setWhere(e.target.value)} type="text" placeholder='Куда' required/>
                <input value={kg} onChange={e => setKg(e.target.value)} type="text" placeholder='Общий вес груза' required />
                <input value={phone} onChange={e => setPhone(e.target.value)} type="number" placeholder='Номер телефона' required/>
                <textarea value={message} onChange={e => setMessage(e.target.value)}   placeholder='Дополнительная информация груза' name="" id="" cols="30" rows="10"></textarea>
                <button type='submit' >{getText("modal2")}</button>
              </div>
            </div>
            </div>
          </form>
        </div>
       </div>
    </div>
  )
}

export default Modal























// import React from 'react';
// import './navbar.css';

// const Modaller = ({ active, setActive, children }) => {
//   return (
//     <div
//       className={active ? "modal active" : "modal"}
//       onClick={() => setActive(false)}
//     >
//       <div
//         className={active ? "modal_content active" : "modal_content"}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modaller;