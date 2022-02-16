import React from 'react';

const Bookings = () => {
    return (
        <>
            <section className='booking d-flex'>
                <div className='booking-left'>
                    <div className='service-header-container'> 
                        <h5 className='secondary-heading text-left'>
                            Easy and Fast
                        </h5>
                        <h3 className='primary-heading text-left'>
                        Book your next trip in 3 easy steps
                        </h3>
                    </div>
                    <div>
                        <div className='booking_steps d-flex'>
                            <div className='booking_steps_icon_container'>
                                <img src="/icons/booking/Group 7destination_icon.svg"/>
                            </div>
                            <div>
                                <h6>Choose Destination</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Urna, tortor tempus. 
                                </p>
                            </div>
                        </div>
                        <div className='booking_steps d-flex'>
                            <div className='booking_steps_icon_container'>
                                <img src="/icons/booking/Group 12payment.svg"/>
                            </div>
                            <div>
                                <h6> <strong>Make Payment</strong></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Urna, tortor tempus. 
                                </p>
                            </div>
                        </div>
                        <div className='booking_steps d-flex'>
                            <div className='booking_steps_icon_container'>
                                <img src="/icons/booking/Group 11car.svg"/>
                            </div>
                            <div>
                                <h6>Reach Airport on Selected Date</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Urna, tortor tempus. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='booking-right'>
                    <img src='/icons/booking/Imagebooking.jpg' />
                </div>
            </section>
        </>
    )
};
export default Bookings;