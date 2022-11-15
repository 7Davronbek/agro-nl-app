import React from 'react'
import './swiperClients.css'
import Logo1 from '../../../../image/Group.svg'
import Logo2 from '../../../../image/image 13.svg'
import Logo3 from '../../../../image/image 14.svg'
import Logo4 from '../../../../image/image_2022-11-07_14-42-44 1.svg'
import Logo5 from '../../../../image/image_2022-11-07_14-52-51 1.svg'


export default function SwipeClient() {
  return (
    <>

      <div className="carousel_clas">
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto"> */}
              <div className="otherclients">
                <div class="slider">
                  <div class="slide-track">
                    <div class="slide">
                      <img src={Logo1} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo2} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo3} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo4} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo5} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo1} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo2} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo3} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo4} height="100" width="250" alt="" />
                    </div>
                    <div class="slide">
                      <img src={Logo5} height="100" width="250" alt="" />
                    </div>

                  </div>
                </div>
              </div>
            {/* </div>
          </div>
        </div> */}
      </div>
    </>
  )
}
