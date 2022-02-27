import './VideoList.scss';
import Video from '../Video/Video';


function VideoList({ videoDetails, currentVideo, handleVideoChange}) {
    return (
        <section className='video__list-main'>
            <h2 className="video__list-heading">Next Video</h2>
            <ul className="video__list-list">
                {videoDetails
                    .filter(video => video.id !== currentVideo.id)
                    .map(video => {
                        return (
                            <Video
                            key={video.id}
                            poster ={video.image}
                            title={video.title}
                            channel= {video.channel}
                            handleVideoChange={handleVideoChange}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default VideoList