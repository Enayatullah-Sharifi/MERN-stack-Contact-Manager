import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="bg-primary text-light ">
        <div className="container d-flex justify-content-between align-items-center py-1 px-5">
          <Link to="/">
            <h1 className="logo">LOGO</h1>
          </Link>
          <Link to="/search">
            <FaSearch className="text-light font-bold fs-4" />
          </Link>
          <ul>
            <Link to="/add" className="fw-bold">
              New Contact
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
