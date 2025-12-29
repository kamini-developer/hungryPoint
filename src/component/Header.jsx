import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";


function Header() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h2 className="logo-font">Hungry Point</h2>

      <nav className="navbar">
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              🛒 Cart <strong>({cart.length})</strong>
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
