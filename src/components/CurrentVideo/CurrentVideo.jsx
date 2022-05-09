import './CurrentVideo.scss';
import Likes from '../../Assets/Icons/likes.svg';
import Views from '../../Assets/Icons/views.svg';

function CurrentVideo({currentVideo, comments}){
    return (
        <section className='currentVideo'>
            <section className="currentVideo__wrap">
                <h1 className='currentVideo__title'>
                    {currentVideo.title}
                </h1>

                {/* current video details section */}

                <div className="currentVideo__details">
                    <div className="currentVideo__sub-container">
                        <h2 className="currentVideo__channel">
                            By {currentVideo.channel}
                        </h2>
                        <p className="currentVideo__timestamp">
                            {new Date(currentVideo.timestamp).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="currentVideo__main-container">
                        <p className="currentVideo__views">
                            <img
                            className='currentVideo__icon-body'
                            src={Views}
                            alt='view icon'
                            /> {currentVideo.views}
                        </p>
                        <p className="currentVideo__likes">
                            <img 
                            className='currentVideo__icon-body'
                            src={Likes}
                            alt='view icon'
                            /> {currentVideo.likes}
                        </p>
                    </div>
                </div>
                <div className="currentVideo__description">
                    <p className='video__text'>
                        {currentVideo.description}
                    </p>
                </div>
                <p className='currentVideo__comment-counter'>
                    {comments.length} Comments
                </p>
            </section>
        </section>
    )
}

export default CurrentVideo