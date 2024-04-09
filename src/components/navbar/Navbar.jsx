import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>SahiEstate</span>
        </a>
        <Link to = "/">Home</Link>
        <Link to = "/list">List</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/register">Registration</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="/avatar.jpg"
              alt=""
            />
            <span>Suneha Suman</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to = "/">Home</Link>
          <Link to = "/list">List</Link>
          <Link to = "/login">Login</Link>
          <Link to = "/register">Registration</Link>
          <Link to = "/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
