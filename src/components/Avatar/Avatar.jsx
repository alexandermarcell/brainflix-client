import Monhan from '../../Assets/Images/Mohan-muruge.jpg';
import './Avatar.scss';

function Avatar(){
    return (
        <>
            <img className="avatar-main" src={Monhan} alt="monhan-avatar" />
        </>
    )
}

export default Avatar