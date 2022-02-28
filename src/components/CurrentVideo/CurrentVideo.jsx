import './CurrentVideo.scss';
import Likes from '../../Assets /Icons/likes.svg';
import Views from '../../Assets /Icons/views.svg';
import Comments from '../Comments/Comments';
import ButtonAdd from '../Button/ButtonAdd';
import Avatar from '../Avatar/Avatar';
// import Hero from '../Hero/Hero';

function CurrentVideo({currentVideo}){
    return (
        <section className='current-section'>
            <div className="current-section__wrap">
                {/* <Hero/> */}
                {/* <video 
                    className='current-section__wrap__video'
                    poster={currentVideo.image}
                    src={currentVideo.video}
                    type="video/mp4"
                    alt='current-playing video'
                /> */}
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

                {/* Current Video Comments Section */}

                <div className="current-section__wrap__comments">
                    <div className="current-section__wrap__comments-avatar">
                        <Avatar/>
                    </div>
                    <div className="current-section__wrap__comments-container">
                        <form
                        className='current-section__wrap__comments-container__form'
                        action="Get"
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
                            <ButtonAdd />
                        </form>
                    </div>
                </div>
                <Comments currentVideo={currentVideo}/>
            </div>
        </section>
    )
}

export default CurrentVideo