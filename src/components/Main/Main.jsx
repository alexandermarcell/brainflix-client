import './Main.scss';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Comments from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';
import CommentForm from '../CommentForm/CommentForm';
import CurrentVideo from '../CurrentVideo/CurrentVideo';

function Main({ videoDetails, currentVideo, comments }) {
    return (
        <div className="main">
            <div className="main-wrap">
                <Navbar />
                <Hero
                currentVideo={currentVideo}
                />
                <div className="main__body">
                    <div className="main__body__comments">

                        <CurrentVideo
                        currentVideo={currentVideo}
                        />

                        <CommentForm />

                        <Comments
                        comments={comments}
                        />

                    </div>
                    <div className="main__body__list">
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