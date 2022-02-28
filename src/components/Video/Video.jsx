import './Video.scss';

function Video({id, title, poster, channel, handleVideoChange}){
    return (
        <div className="video-section">
            <div className="video-section__wrap">
                <li className='video-section__wrap__list'>
                    <div className="video-section__wrap__container1">
                        <img
                        className='video-section__wrap__container__poster-image'
                        src={poster} 
                        alt="poster-for video" 
                        />
                    </div>
                    <div className="video-section__wrap__conatiner">
                        <a 
                        className='video-section__wrap__container__title'
                        onClick={()=> {
                            handleVideoChange(id)
                        }} 
                        href="#root" >
                            {title}
                        </a>
                        <p className='video-section__wrap__container__channel'>
                            {channel}
                        </p>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default Video