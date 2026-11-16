
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid custom-container">

                <Link className="navbar-brand" to="/">
                    <span className="brand-icon">✦</span>
                    Nova<span className="brand-highlight">UI</span>
                </Link>

                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                end
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarContent"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/login"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarContent"
                            >
                                Login
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link register-btn"
                                to="/register"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarContent"
                            >
                                Get Started →
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
