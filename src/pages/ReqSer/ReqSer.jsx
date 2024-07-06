import React from 'react'
import './ReqSer.css'
import serviceRequestImg from './header-image.jpeg'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import ReviewCarousel from '../../components/Reviews/Reviews';

function ReqSer() {
    return (
        <main className='how-it-works-body'>
            <section className='section-top-header' >
                <div className="section-top-right" >
                    <img src={serviceRequestImg} alt="" />
                </div>
                <div className="section-top-left">
                    <p>HOW IT WORKS</p>
                    <h1>ReqSer is the simplest, most trusted way to Requset and Offer services.</h1>
                    <div className='section-left-button'><Link to='/' className='cta-button'>Get Started</Link></div>
                </div>

            </section>
            <section className='section-body-part'>
                <div className="how-it-works-process">
                    <div className="card">
                        <div className="card-body">
                            <div className='card-description'>
                                <h5 className="card-title">Create Account & Sign In</h5>
                                <p className="card-text">Create your account and sign in to get started.</p>
                            </div>
                            <div className='card-image'> <img src={assets.signup_image} alt="" /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='card-description'>
                                <h5 className="card-title">Fill Request Form or Describe Service</h5>
                                <p className="card-text">Fill out the request form or describe the service you're offering.</p>
                            </div>
                            <div className='card-image'><img src={assets.request_form_image} alt="" /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='card-description'>
                                <h5 className="card-title">Explore Nearby Services</h5>
                                <p className="card-text">Explore nearby services and requests posted by others.</p>
                            </div>
                            <div className='card-image'><img src={assets.explore_service_image} alt="" /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className='card-description'>
                                <h5 className="card-title">Connect with Service Providers</h5>
                                <p className="card-text">Connect with service providers and others directly on the app.</p>
                            </div>
                            <div className='card-image'> <img src={assets.chat_image} alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="learn-request-service-section">
                <div className="learn-container">
                    <h5>LEARN BUYING AND SELLING BEST PRACTICES</h5>
                    <div className="learn-body">
                        <div className="learn-request-tips-section">
                                <picture>
                                    <img src="https://about.offerup.com/wp-content/uploads/2017/12/icon-pig.png" alt="profile" width="72px" height="64px"/>
                                </picture>
                                <h1 >Service Request Tips</h1>
                                <p>Find out how to successfully request for services you need.</p>
                                <a href="" className="learn-more-button" >More</a>
                        </div>
                        <div className='learn-divider'></div>
                        <div className="learn-request-tips-section">
            
                                <picture>
                                    <img src="https://about.offerup.com/wp-content/uploads/2017/12/icon-selling.png" alt="profile" width="72px" height="64px"/>
                                </picture>
                                <h1>Service Offer Tips</h1>
                                <p >Get tips on how to engage with people who are requesting for your service.</p>
                                <a href="" className="learn-more-button">More</a>
                           
                        </div>
                    </div>
                </div>
            </section>
            <ReviewCarousel />

        </main>
    );
};


export default ReqSer