import './VideoList.scss';
import Video from '../Video/Video';


function VideoList({videoDetails, currentVideo}) {
    return (
        <section className='list'>
                <ul className="list__wrap">
                    <h2 className="list__heading">Next Video</h2>
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
            
        </section>
    )
}

export default VideoList