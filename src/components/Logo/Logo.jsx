import './Logo.scss';
import logo from "../../Assets /Logo/BrainFlix-logo.svg";

function Logo(){
    return (
        <div className='brainFlix-logo'>
            <img src={ logo } alt="brainflix-logo" />
        </div>
    )
}

export default Logo