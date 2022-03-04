import './Navbar.scss';
import Logo from "../Logo/Logo";
import Search from "../Search/Search"
import Button from "../Button/Button";
import AvatarTablet from "../Avatar/AvatarTablet";
import upLoad from '../../Assets/Icons/upload.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__wrap">
                <Logo />
                <Search />
                <Button
                text='upload'
                image={upLoad}
                />
                <AvatarTablet />
            </div>
        </div>
    );
}

export default Navbar