import React from 'react'
import './ReqSer.css'
import serviceRequestImg from './header-image.jpeg'
import { assets } from '../../assets/assets';

function ReqSer() {
    return (
        <main className='how-it-works-body'>
            <section className='section-top-header' >
                <div className="section-top-left">
                    <p>HOW IT WORKS</p>
                    <h1>ReqSer is the simplest, most trusted way to Requset and Offer services.</h1>
                    <div className='section-left-button'><button className='cta-button'>Get Started</button></div>
                </div>
                <div className="section-top-right" >
                    <img src={serviceRequestImg} alt="" />
                </div>
            </section>
            <section className='section-body-part'>
            <div className="card-row">
            <div className="card">
              <div className="card-body">
              <div className='card-description'>
                <h5 className="card-title">Create Account & Sign In</h5>
                <p className="card-text">Create your account and sign in to get started.</p>
                </div>
                <img src={assets.signup_image} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
              <img src={assets.request_form_image} alt="" />
                <div className='card-description'>
                <h5 className="card-title">Fill Request Form or Describe Service</h5>
                <p className="card-text">Fill out the request form or describe the service you're offering.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
              <div className='card-description'>
                <h5 className="card-title">Explore Nearby Services</h5>
                <p className="card-text">Explore nearby services and requests posted by others.</p>
                </div>
                <img src={assets.explore_service_image} alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
              <img src={assets.chat_image} alt="" />
              <div className='card-description'>
                <h5 className="card-title">Connect with Service Providers</h5>
                <p className="card-text">Connect with service providers and others directly on the app.</p>
                </div>
                
              </div>
            </div>
          </div>

            </section>
        </main>
    );
};


export default ReqSer