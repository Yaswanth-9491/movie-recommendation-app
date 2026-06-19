import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎬 MovieFinder
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/genres">Genres</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;