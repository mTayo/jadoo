import React from 'react';

const Subscription = () => {
    return (
        <div className='subscription mx-auto'>
            <div className='floating-play-btn' />
            <div className='floating-bg' />
            <div className='subscription-box '>
                <h5>
                    Subscribe to get information, latest news and other<br/>
                    interesting offers about Jadoo  
                </h5>
                <div className="spiral_left_floating" />
                <div className="spiral_right_floating"/>
                <div className='sub-email d-flex mx-auto'>
                    <div className='d-flex bg-white mail-input mx-auto'>
                        <div className='img-icon'>
                            <img src='/icons/subscription/mail.svg' />
                        </div>
                        <input placeholder='Your email' />
                    </div>
                    <button>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Subscription;