import React from 'react';
import { motion, Variants } from "framer-motion";

const variant_1: Variants = {
    offscreen: {
      y: 90
    },
    onscreen: {
      y: 0,
    //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
};
const variant_2: Variants = {
    offscreen: {
      y: 90
    },
    onscreen: {
      y: 0,
    //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4
      }
    }
};
const variant_3: Variants = {
    offscreen: {
      y: 90
    },
    onscreen: {
      y: 0,
    //   rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 6
      }
    }
};
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
                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div  variants={variant_1}>
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
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div  variants={variant_2}>
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
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="card-container"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div  variants={variant_3}>
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
                               
                            </motion.div>
                        </motion.div>
                       
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