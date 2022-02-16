import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer d-flex footer-gap'>
                <div className='logo'>
                    <img src="/icons/footer/Jadoo.svg" />
                    <p>
                        Book your trip in minute, get full<br/>
                        Control for much longer.
                    </p>
                </div>
                <div className='navs d-flex'>
                    <div className='footer-nav'>
                        <h6>
                            Company
                        </h6>
                        <ul>
                            <li>
                                About
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Mobile
                            </li>
                        </ul>
                    </div>
                    <div className='footer-nav'>
                        <h6>
                            Contact
                        </h6>
                        <ul>
                            <li>
                                Help/FAQ
                            </li>
                            <li>
                                Press
                            </li>
                            <li>
                                Affilates
                            </li>
                        </ul>
                    </div>
                    <div className='footer-nav'>
                        <h6>
                            More
                        </h6>
                        <ul>
                            <li>
                                Airlinefees
                            </li>
                            <li>
                                Airline
                            </li>
                            <li>
                                Low fare tips
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='socials'>
                    <div className='icon-container d-flex'>
                        <div>
                            <img src="/icons/footer/Socialfb.svg" />
                        </div>
                        <div>
                            <img src="/icons/footer/Socialinst.png" />
                        </div>
                        <div>
                            <img src="/icons/footer/Socialtwitter.svg" />
                        </div>
                       
                    </div>
                    <h6>Discover our app</h6>
                    <div className='download-links d-flex'>
                        <div className='play-store'>
                            <img src="/icons/footer/Google Play.svg" />
                        </div>
                        <div className='apple-market'>
                            <img src="/icons/footer/Play Store.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer;