import React from 'react';

const Destinations = () => {
    return (
        <>
             <section className='destinations'>
                <div className='service-header-container'> 
                    <h5 className='secondary-heading'>
                        Top Selling
                    </h5>
                    <h3 className='primary-heading'>
                    Top Destinations
                    </h3>
                   
                </div>
                <div className='destination-cards-container'>
                    <div className='destinations-card'>
                        <div className='destination-img'>
                            <img src="/icons/destinations/rome.png"/>
                        </div>
                        <div className='card-content'>
                            <div className='line-1 d-flex'>
                                <p>Rome, Italty</p>
                                <p>$5,42k</p>
                            </div>
                            <div className='line-2 d-flex'>
                                <img src="/icons/destinations/navigation.svg"/>
                                <p>10 Days Trip</p>
                            </div>
                        </div>
                    </div>
                    <div className='destinations-card'>
                        <div className='destination-img'>
                            <img src="/icons/destinations/london.png"/>
                        </div>
                        <div className='card-content'>
                            <div className='line-1 d-flex'>
                                <p>London, UK</p>
                                <p>$4.2k</p>
                            </div>
                            <div className='line-2 d-flex'>
                                <img src="/icons/destinations/navigation.svg"/>
                                <p>12 Days Trip</p>
                            </div>
                        </div>
                    </div>
                    <div className='destinations-card spring'>
                        <div className='floating-spring' />
                        <div className='destination-img'>
                            <img src="/icons/destinations/europe.png"/>
                        </div>
                        <div className='card-content'>
                            <div className='line-1 d-flex'>
                                <p>Full Europe</p>
                                <p>$15k</p>
                            </div>
                            <div className='line-2 d-flex'>
                                <img src="/icons/destinations/navigation.svg"/>
                                <p>28 Days Trip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Destinations;