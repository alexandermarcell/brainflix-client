import './VideoList.scss';
import Video from '../Video/Video';


function VideoList({videoDetails, currentVideo}) {
    return (
        <section className='video__list-main'>
            <div className="video__list-main__wrap">
                <h2 className="video__list-main__wrap__heading">Next Video</h2>
                <ul className="video__list-main__wrap__list">
                    {videoDetails
                        .filter(video => video.id !== currentVideo.id)
                        .map(video => {
                            return (
                                <Video
                                key={video.id}
                                id={video.id}
                                poster ={video.image}
                                title={video.title}
                                channel= {video.channel}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default VideoList