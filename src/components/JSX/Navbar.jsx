import CartWidget from "./CartWidget";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link className="menu" to="/">
                Todos
              </Link>
            </li>
            <li>
              <Link className="" to="/category/Servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="" to="/category/Productos">
                Productos
              </Link>
            </li>
            <CartWidget />
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
