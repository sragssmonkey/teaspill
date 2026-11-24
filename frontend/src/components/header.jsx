
import "./Header.css";
import { Link } from "react-router-dom";
import { House, UserRound } from "lucide-react";

function Header() {
    return (
        <header className="site-header">

            <nav className="header-top">

                <Link to="/" className="nav-home">
                    <House size={18} />
                    <span>HOME</span>
                </Link>

                <Link to="/trending" className="nav-trending">
                    TRENDING
                </Link>

                <Link to="/profile" className="user-icon">
                    <UserRound size={21} />
                </Link>

            </nav>

        </header>
    );
}

export default Header;
