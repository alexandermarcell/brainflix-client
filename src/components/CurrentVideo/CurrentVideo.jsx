import './CurrentVideo.scss';
import Likes from '../../Assets/Icons/likes.svg';
import Views from '../../Assets/Icons/views.svg';
import Comments from '../Comments/Comments';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import AddComment from '../../Assets/Icons/add_comment.svg'

function CurrentVideo({currentVideo}){
    return (
        <section className='current-section'>
            <div className="current-section__wrap">
                 <h1 className='current-section__wrap__video-name'>
                        {currentVideo.title}
                </h1>

                {/* current video details section */}

                <div className="current-section__wrap__details">
                    <div className="current-section__wrap__container">
                        <h2 className="current-section__wrap__container__channel">
                            By {currentVideo.channel}
                        </h2>
                        <p className="current-section__wrap__container__timestamp">
                            {new Date(currentVideo.timestamp).toLocaleDateString()}
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

                {/* Current Video Comments Section */}

                <div className="current-section__wrap__comments">
                    <div className="current-section__wrap__comments-avatar">
                        <Avatar/>
                    </div>
                    <div className="current-section__wrap__comments-container">
                        <form
                        className='current-section__wrap__comments-container__form'
                        action="/"
                        >
                            <label 
                            className='current-section__wrap__comments-container__form-label' 
                            htmlFor="/"
                            >
                                Join The Conversation
                            </label>

                            <textarea 
                            name="comment" 
                            className='current-section__wrap__comments-container__form-textarea'
                            id="form-textarea" 
                            placeholder='Add a new comment' 
                            cols="30" rows="10"
                            >   
                            </textarea>
                        </form>
                        <div className="current-section__wrap__comments--button">
                            <Button
                            image={AddComment}
                            text='comment' 
                            />
                        </div>
                    </div>
                </div>
                <Comments currentVideo={currentVideo}/>
            </div>
        </section>
    )
}

export default CurrentVideo