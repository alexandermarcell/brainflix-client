import './Navbar.scss';
import Logo from "../Logo/Logo";
import Search from "../Search/Search"
import Button from "../Button/Button";
import { Link } from 'react-router-dom';
import Avatar from "../Avatar/Avatar";
import upLoad from '../../Assets/Icons/upload.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__wrap">
                <Link className='navbar__logo' to="/" ><Logo /></Link>
                <Search />
                <Link 
                to="/upload"
                className='navbar__button'>
                    <Button
                    text='upload'
                    image={upLoad}
                    />
                </Link>
                <Avatar />
            </div>
        </div>
    );
}

export default Navbar