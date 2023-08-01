import React from "react";
import "../StyleSheets/Component.css";
import { useAuth } from "../ContextApi/Auth";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [auth, setAuth] = useAuth();
  const location=useLocation();

  //Log-Out Function
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: " ",
    });
    localStorage.removeItem("auth");
  };
  return (
    <>
      {location.pathname!=="/bookDemo"?<nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-index">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://ongrid.in/images/home/logo/logo_ongrid-darkbakground.png"
              alt="Bootstrap"
              width="100"
              height="50"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#whyOngrid">
                  Why OnGrid
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#offeringsNew">
                  Our Offerings
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#business">
                  Businesses
                </HashLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQs
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item Just-center">
                <Link className="nav-link nav-book-btn" to="/bookDemo">
                  Book a Demo
                </Link>
              </li>
              <li className="nav-item Just-center">
                {!auth.user ? (
                  <>
                    <Link className="nav-link" to="/sign-in">
                      Sign-in
                    </Link>
                  </>
                ) : (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle variant=" primary" id="dropdown-basic" style={{color:"white"}}>
                      {auth?.user?.name}
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{backgroundColor:"#212529"}}>
                        <Dropdown.Item>
                          <Link to="/dashboard" style={{textDecoration:"none"}} >Daskboard</Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                          <Link to="/" onClick={handleLogout} style={{textDecoration:"none"}}>Log-Out</Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                )}
                ;
              </li>
            </ul>
          </div>
        </div>
      </nav>:<></>}
    </>
  );
}

export default Navbar;
