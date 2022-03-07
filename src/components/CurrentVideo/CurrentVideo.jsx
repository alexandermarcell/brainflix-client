import './CurrentVideo.scss';
import Likes from '../../Assets/Icons/likes.svg';
import Views from '../../Assets/Icons/views.svg';

function CurrentVideo({currentVideo}){
    return (
        <section className='current-video'>
            <div className="current-video__wrap">
                 <h1 className='current-video__name'>
                    {currentVideo.title}
                </h1>

                {/* current video details section */}

                <div className="video-wrap">
                    <div className="video-wrap__header">
                        <h2 className="video-wrap__channel">
                            By {currentVideo.channel}
                        </h2>
                        <p className="video-wrap__timestamp">
                            {new Date(currentVideo.timestamp).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="video-wrap__container">
                        <p className="video-wrap__views">
                            <img
                            className='icon-body'
                            src={Views}
                            alt='view icon'
                            /> {currentVideo.views}
                        </p>
                        <p className="video-wrap__likes">
                            <img 
                            className='icon-body'
                            src={Likes}
                            alt='view icon'
                            /> {currentVideo.likes}
                        </p>
                    </div>
                </div>
                <div className="video__description">
                    <p className='video__text'>
                        {currentVideo.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CurrentVideo