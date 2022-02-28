import './Hero.scss';
import React from 'react';

function Hero({currentVideo}){
    return(
        <section className="hero">
            <div className="current-video__hero__wrap">
                <video
                className='current-video__player'
                src={currentVideo.video}
                poster={currentVideo.image}
                type ='mp4/video'
                alt='current-playing__video'
                />
            </div>
        </section>
    )
}

export default Hero