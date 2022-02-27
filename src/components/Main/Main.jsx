import './Main.scss';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import VideoList from '../VideoList/VideoList';

function Main({videoDetails, currentVideo, handleVideoChange}) {
    return (
        <div className="main">
            <CurrentVideo
            currentVideo={currentVideo}
            />
            <div className="video_list-container">
                <VideoList
                videoDetails={videoDetails}
                currentVideo={currentVideo}
                handleVideoChange={handleVideoChange}
                />
            </div> 
        </div>
    );
}

export default Main