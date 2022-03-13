import './Video.scss';
import { Link } from 'react-router-dom';

function Video( { id, title, poster, channel }){
    return (
        <div className="video">
            <div className="video__wrap">
                <Link className='video__link' to={`/videos/${id}`} >
                    <li className='video__list'>
                        <div className="video__image">
                            <img
                            className='video__poster'
                            src={poster} 
                            alt="poster for video" 
                            />
                        </div>
                        <div className="video__body">
                            <h3 className='video__title'>
                                {title}
                            </h3>
                            <p className='video__channel'>
                                {channel}
                            </p>
                        </div>
                    </li>
                </Link>
            </div>
        </div>
    )
}

export default Video