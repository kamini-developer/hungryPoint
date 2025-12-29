import { Link } from "react-router-dom";
import { useContext } from "react";
import  CartContext from "../context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h2>Hungry Point</h2>

      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/cart">
              🛒 Cart <strong>({cart.length})</strong>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;




