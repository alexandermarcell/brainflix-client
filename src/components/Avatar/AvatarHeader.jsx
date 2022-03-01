import Monhan from '../../Assets/Images/Mohan-muruge.jpg';
import './avatarHeader.scss';

function AvatarHeader(){
    return (
        <>
            <img className="avatarHeader" src={Monhan} alt="monhan-avatar" />
        </>
    )
}

export default AvatarHeader