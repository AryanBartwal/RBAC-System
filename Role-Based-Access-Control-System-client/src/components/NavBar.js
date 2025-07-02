import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "../styles/NavBar.css";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onLogout = async () => {
    await logout();
    history.push("/login");
  };

  if (!user) return null;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/blogs" className="navbar-logo">
          RBAC System
        </Link>
        
        <div className="navbar-links">
          <Link to="/blogs" className={`navbar-link ${isActive('/blogs') ? 'active' : ''}`}>
            Blogs
          </Link>
          {user.role === "ADMIN" && (
            <>
              <Link to="/admin-blogs" className={`navbar-link ${isActive('/admin-blogs') ? 'active' : ''}`}>
                Admin Blogs
              </Link>
              <Link to="/admin-users" className={`navbar-link ${isActive('/admin-users') ? 'active' : ''}`}>
                Admin Users
              </Link>
            </>
          )}
        </div>

        <div className="navbar-user">
          <div className="navbar-avatar">
            {getInitials(user.name)}
          </div>
          <span className="navbar-username hide-sm">Hello, {user.name}</span>
          <Link to="/profile" className={`navbar-link ${isActive('/profile') ? 'active' : ''}`}>
            Profile
          </Link>
          <button onClick={onLogout}>Logout</button>
        </div>

        <button className="navbar-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      <div className={`navbar-mobile ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="navbar-mobile-close" onClick={toggleMobileMenu}>
          ✕
        </button>
        <Link to="/blogs" className="navbar-mobile-link" onClick={toggleMobileMenu}>
          Blogs
        </Link>
        {user.role === "ADMIN" && (
          <>
            <Link to="/admin-blogs" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              Admin Blogs
            </Link>
            <Link to="/admin-users" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              Admin Users
            </Link>
          </>
        )}
        <Link to="/profile" className="navbar-mobile-link" onClick={toggleMobileMenu}>
          Profile
        </Link>
        <button onClick={onLogout} className="navbar-mobile-link">
          Logout
        </button>
      </div>
    </nav>
  );
}
