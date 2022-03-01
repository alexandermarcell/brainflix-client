import './Hero.scss';
import React from 'react';

function Hero({currentVideo}){
    return(
        <section className="hero">
            <div className="current-video__hero__wrap">
                <video
                className='current-video__player'
                poster={currentVideo.image}
                controls
                />
            </div>
        </section>
    )
}

export default Hero