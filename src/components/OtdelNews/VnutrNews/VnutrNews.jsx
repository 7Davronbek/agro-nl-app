import React, { useEffect, useState } from 'react'
import './vnutrNews.css'
import VnutrImg from '../../../image/vnutr.png';
import News from '../../Home/News/News';
import {API_PATH} from '../../tools/constabts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function VnutrNews() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [inNews, setInNews] = useState({})
        const [loader, setLoader] = useState(true)

        const getInNews = async () => {
            await axios.get(API_PATH + '/news-detail/' + path)
                .then((res) => {
                    setInNews(res.data)
                    setLoader(false)
                })
                .catch((err) => {
                    console.log(err);
                    setLoader(false)
                })
        }

        useEffect(() => {
            getInNews()
        }, [])
    return (
        <>
            <div className="vnutrnews">
                <div className="container">
                    <div className="row">
                    <div key={inNews.id} className="col-lg-12 mx-auto">
                            <img src={inNews.image} alt="" />
                            <div className="col-lg-10 mx-auto">
                            <h3>{inNews.title}</h3>
                            <p data-aos="fade-up">
                                {inNews.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <News />
        </>
    )
}
