import AvatarTablet from "../Avatar/AvatarTablet";
import AvatarHeader from "../Avatar/AvatarHeader";
import Search from "../Search/Search"
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import './Navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__wrap">
                < Logo />
                <Search />
                <AvatarHeader />
                <Button />
                <AvatarTablet />
            </div>
        </div>
    );
}

export default Navbar