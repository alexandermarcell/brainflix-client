import './CurrentVideo.scss';
import Likes from '../../Assets /Icons/likes.svg';
import Views from '../../Assets /Icons/views.svg';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

function CurrentVideo({currentVideo}){
    return (
        <section className='current-section'>
            <div className="current-section__wrap">
                <video className='current-section__wrap__video'
                    poster={currentVideo.image}
                    src={currentVideo.video}
                    type="video/mp4"
                    alt='current-playing video'
                />
                 <h1 className='current-section__wrap__video-name'>
                        {currentVideo.title}
                </h1>
                <div className="current-section__wrap__details">
                    <div className="current-section__wrap__container">
                        <h2 className="current-section__wrap__container__channel">
                            By {currentVideo.channel}
                        </h2>
                        <p className="current-section__wrap__container__timestamp">
                            {currentVideo.timestamp}
                        </p>
                    </div>
                    <div className="current-section__wrap__container">
                        <p className="current-section__wrap__container__views">
                            <img
                            className='icon-body'
                            src={Views}
                            alt='view icon'
                            /> {currentVideo.views}
                        </p>
                        <p className="current-section__wrap__container__likes">
                            <img 
                            className='icon-body'
                            src={Likes}
                            alt='view icon'
                            /> {currentVideo.likes}
                        </p>
                    </div>
                </div>
                <div className="current-section__wrap__description">
                    <p className='current-section__wrap__description__text'>
                        {currentVideo.description}
                    </p>
                </div>
                <div className="current-section__wrap__comments">
                    <Avatar/>
                    <div className="current-section__wrap__comments-container">
                        <form
                        className='current-section__wrap__comments-form'
                        action="Get"
                        >
                            <label className='current-section__wrap__comment-form__label' htmlFor="/">Join The Conversation</label>
                            <textarea name="comment" id="form-textarea" placeholder='Add a new comment' cols="30" rows="10"></textarea>
                        </form>
                        <Button/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default CurrentVideo