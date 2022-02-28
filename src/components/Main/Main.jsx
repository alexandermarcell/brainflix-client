import './Main.scss';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import VideoList from '../VideoList/VideoList';
import Hero from '../Hero/Hero';

function Main({videoDetails, currentVideo, handleVideoChange}) {
    return (
        <div className="main">
            <Hero
            currentVideo={currentVideo}
            />
            <div className="main-body">
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
            
        </div>
    );
}

export default Main