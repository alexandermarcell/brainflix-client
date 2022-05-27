import './Navbar.scss';
import Logo from "../Logo/Logo";
import Search from "../Search/Search"
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import upLoad from '../../Assets/Icons/upload.svg';
import Mohan from '../../Assets/Images/Mohan-muruge.jpg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__wrap">
                <Link className='navbar__logo' to="/" >
                    <Logo />
                </Link>
                <Search />
                <Link to="/upload" className='navbar__button'>
                    <Button text='upload' image={upLoad} />
                </Link>
                <img 
                src={Mohan}
                className='navbar__avatar'
                alt='Search line avatar' 
                />
            </div>
        </div>
    );
}

export default Navbar