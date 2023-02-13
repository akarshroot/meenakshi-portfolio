import React, { Fragment } from 'react'
import meenakshiImg from '../assets/meenakshi-2.png'
import './Home.css'

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">

      <div className='home-bg-image'>
        <div className='home-bg-image-overlay'>
        </div>
      </div>
        <div className="container">

          <div className="row">

            <div className='home-hero'>
              <div className="row">

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                  <div>
                    <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                    <h1 className="m-0 font-big animate-charcter">I'm Meenakshi,</h1>
                    <p className="ls-2 mt-2 slide-in-bottom">Computer Engineering Student / Artist / Travel Enthusiast</p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12 col-sm-12">
                  <img className="img-fluid" src={meenakshiImg} alt="Meenakshi Panghal"></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Home