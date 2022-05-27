import './Main.scss';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Comments from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';
import CommentForm from '../CommentForm/CommentForm';
import CurrentVideo from '../CurrentVideo/CurrentVideo';

function Main(props) {
    const { videoDetails, currentVideo, comments } = props;
    return (
        <div className="main">
            <section className="main__wrap">
                <div className="main__nav"> <Navbar /> </div>
                <Hero currentVideo={currentVideo} />
                <div className="main__body">
                    <div className="main__body-container">
                        <div className="main__comments">
                            <CurrentVideo currentVideo={currentVideo} comments={comments} />
                            <CommentForm currentVideo={currentVideo} />
                            <Comments comments={comments} currentVideo={currentVideo} />
                        </div>
                        <div className="main__list">
                            <VideoList videoDetails={videoDetails} currentVideo={currentVideo} /> 
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main