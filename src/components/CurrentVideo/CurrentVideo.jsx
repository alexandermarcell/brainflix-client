import './CurrentVideo.scss';
import Likes from '../../Assets/Icons/likes.svg';
import Views from '../../Assets/Icons/views.svg';

function CurrentVideo({currentVideo}){
    return (
        <section className='currentVideo'>
            <div className="currentVideo__wrap">
                 <h1 className='currentVideo__name'>
                    {currentVideo.title}
                </h1>

                {/* current video details section */}

                <div className="details">
                    <div className="detail__header">
                        <h2 className="detail__channel">
                            By {currentVideo.channel}
                        </h2>
                        <p className="detail__timestamp">
                            {new Date(currentVideo.timestamp).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="detail__container">
                        <p className="detail__views">
                            <img
                            className='icon-body'
                            src={Views}
                            alt='view icon'
                            /> {currentVideo.views}
                        </p>
                        <p className="detail__likes">
                            <img 
                            className='icon-body'
                            src={Likes}
                            alt='view icon'
                            /> {currentVideo.likes}
                        </p>
                    </div>
                </div>
                <div className="detail__description">
                    <p className='video__text'>
                        {currentVideo.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CurrentVideo