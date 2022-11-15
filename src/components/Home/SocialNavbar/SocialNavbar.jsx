import React from 'react'
import './socailNavbar.css';

export default function SocialNavbar() {
    return (
        <>
            <div className="socialNavbar">
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <div className="nav_phone">
                                <img src="/images/Vector.png" alt="" />
                                <a href="#">+998(90)134-56-78</a>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <a href="#" className='soc_a'><img src="/images/telegram_icon-icons.png" alt="" /></a>
                            <a href="#" className='soc_a'><img src="/images/1491580635-yumminkysocialmedia26_83102.png" alt="" /></a>
                            <a href="#" className='soc_a'><img src="/images/facebook_icon-icons.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
