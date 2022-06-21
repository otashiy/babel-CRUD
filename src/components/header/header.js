import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({className}) => {
return (
<header className={`header` + className}>
    <Link to="/babel" className="header__link">To babel</Link>
</header>
);
}

export default Header;