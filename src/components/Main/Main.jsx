import './Main.scss';
import CurrentVideo from '../CurrentVideo/CurrentVideo';
import VideoList from '../VideoList/VideoList';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';

function Main({videoDetails, currentVideo, handleVideoChange}) {
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
                    </div>
                    <div className="main-wrap__body__list">
                        <VideoList
                        videoDetails={videoDetails}
                        currentVideo={currentVideo}
                        handleVideoChange={handleVideoChange}
                        />
                    </div> 
                </div>
            </div>
            
        </div>
    );
}

export default Main