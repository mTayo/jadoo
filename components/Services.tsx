/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Services = () => {
    return (
        <>
            <section className='services'>
                <div className='service-header-container'> 
                    <h5 className='services-secondary-heading'>
                        CATEGORY
                    </h5>
                    <h3 className='services-primary-heading'>
                        We Offer Best Services
                    </h3>
                    <div className='services-bg' />
                </div>
                <div className='services-card-container'>
                    <div className='services-card'>
                        <div className='icon-container'>
                           
                                <img src="/icons/services/satellite-dish.svg"  alt="jadoo icon" />
                            <div className='satellite-dish-floating-img' />
                        </div>
                        <div>
                            <h5>
                                Calculated Weather 
                            </h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>

                    <div className='services-card selected-card'>
                        <div className='icon-container'>
                           
                                <img src="/icons/services/satellite-dish.svg"  alt="jadoo icon" />
                                <div className='plane-floating-img' />
                        </div>
                        <div>
                            <h5>
                                 Best Flights
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className='selected-card-floating' />
                    </div>

                    <div className='services-card'>
                        <div className='icon-container'>
                           
                                <img src="/icons/services/mic.svg"  alt="jadoo icon" />
                            <div className='satellite-dish-floating-img' />
                        </div>
                        <div>
                            <h5>
                                Local Events 
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                        </div>
                    </div>

                    <div className='services-card'>
                        <div className='icon-container'>
                           
                                <img src="/icons/services/power-supply.svg"  alt="jadoo icon" />
                            <div className='satellite-dish-floating-img' />
                        </div>
                        <div>
                            <h5>
                                Customization 
                            </h5>
                            <p>
                            We deliver outsourced
                            aviation services to our customers
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Services;