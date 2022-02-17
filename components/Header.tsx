import React, {useState} from 'react';
import { motion } from "framer-motion";
import { Spin as Hamburger } from 'hamburger-react';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <header className='header'>
                <div className='header-floating-img'/>
                <div className='header-content-container'>
                    <nav>
                        <div className='app-logo-container'>
                            <img src="/icons/hero_icons/Logo.svg" alt="Jadoo"/>
                        </div>
                        <ul>
                            <li>
                                <a href='#'>
                                    Destinations
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Hotels
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Flights
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Bookings
                                </a>
                            </li>
                            <li>
                                <a href='#' className='login'>
                                Login
                                </a>
                            </li>
                            <li>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <a href='#' className='sign_up'>
                                Sign&nbsp;Up
                                </a>
                            </motion.div>
                            </li>
                        </ul>
                        <div className='toggle-nav'>
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                        
                    </nav>
                    <div className='hero'>
                        <div className='hero-left'>
                            <h6 className='secondary-text'>
                                Best Destinations around the world
                            </h6>
                            <div className='primary-text' >

                            <div className='d-flex'>Travel,&nbsp;<div className='underline-container'>enjoy <div className='underline-text'/></div> </div>
                             and live a new
                            and full life
                            </div>
                            <p className='tertiary-text'>
                                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                            </p>
                            <div className='cta'>
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <button>
                                        Find out more
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                        <div className='hero-right'>
                            <motion.div
                             animate={{
                                scale: [0.5, 1],
                              }}
                                // animate={{ scale: 1 }}
                                // transition={{ duration: 0.5 }}
                            >
                                <img src="/images/hero_images/hero_image.png" alt="Jadoo hero image"/>
                            </motion.div>
                        </div>
                    </div>
                </div>
              
            </header>
        </>
    )
};
export default Header;