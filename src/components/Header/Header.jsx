import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";

function Header() {
    return (
        <div className="header">
            <div className="header__wrap">
                <Navbar />
            </div>
        </div>
    );
}

export default Header