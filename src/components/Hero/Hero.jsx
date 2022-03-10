import './Hero.scss';
import React from 'react';

function Hero(props){
    return(
        <section className="hero">
            <div className="hero__wrap">
                <video
                className='hero__player'
                poster={props.currentVideo.image}
                controls
                />
            </div>
        </section>
    )
}

export default Hero