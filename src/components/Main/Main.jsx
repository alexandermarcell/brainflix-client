import './Main.scss';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import VideoList from '../VideoList/VideoList';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';

function Main({ videoDetails, currentVideo, comments }) {
    return (
        <div className="main">
            <div className="main-wrap">
                <Header />
                <Hero
                currentVideo={currentVideo}
                />
                <div className="main-wrap__body">
                    <div className="main-wrap__body__comments">
                        <CurrentVideo
                        currentVideo={currentVideo}
                        />
                        <CommentForm />
                        <Comments
                        comments={comments}
                        />
                    </div>
                    <div className="main-wrap__body__list">
                        <VideoList
                        videoDetails={videoDetails}
                        currentVideo={currentVideo}
                        />
                    </div> 
                </div>
            </div>
            
        </div>
    );
}

export default Main