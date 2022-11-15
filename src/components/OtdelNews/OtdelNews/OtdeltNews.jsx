import React, { useEffect, useState } from 'react'
import './otdelNews.css'
import carding from '../../../image/news.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {API_PATH} from '../../tools/constabts';
import {getText} from '../../locales/index'

export default function OtdeltNews() {
        const [news, setNews] = useState([])
        const [loader, setLoader] = useState(true)

        const getNews = async () => {
            await axios.get(API_PATH + '/news-list/')
                .then((res) => {
                    console.log(res);
                    setNews(res.data)
                    setLoader(false)
                })
                .catch((err) => {
                    console.log(err);
                    setLoader(false)
                })
                console.log(getNews);
        }

        useEffect(() => {
            getNews()
        }, [])

  return (
    <>
    <div className="new">
        <div className="container">
            <div className="row">
                <h1 className='type_header'>{getText("otdelnews1")}</h1>
                <div className="col-lg-10 mx-auto">
                    <div className="row">
                    {news && news.map((item, index) => (
                        <div  key={index} className="col-lg-4 mb-4">
                            <div className="carding">
                              <div>
                              <div className="otdel_news_carding_image">
                               <img  src={item.image} alt="" />
                               </div>
                               <div className="for_news_content">
                                <p>{item.created_at.slice(0,10)}</p>
                                <h4>{item.title}</h4>
                                <p>{item.content.slice(0,100)}</p>
                                </div>
                              </div>
                                <div className="news_container_text">
                                <Link style={{textDecoration: "none"}} to={`/news-id/${item.id}`}><button>{getText("otdelnews2")}</button></Link>
                                </div>
                            </div>
                        
                        </div>     
                        ))}                  
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
