import Logo from "../Logo/Logo";
import AvatarTablet from "../Avatar/AvatarTablet";
import Search from "../Search/Search"
import Button from "../Button/Button";
import './Navbar.scss';

function Navbar() {
    return (
        <div className="navBar">
            <Logo />
            <div className="navTab">
                <Search />
                <Button />
                <AvatarTablet />
            </div>
        </div>
    );
}

export default Navbar