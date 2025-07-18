import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

const Header: React.FC = () => {
    const location = useLocation();
    const headerRef = useRef<HTMLElement | null>(null);
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        if (headerRef.current) {
            headerRef.current.classList.add("menu_open");
        }
        setIsMenuOpen(true);
    };

    const handleCloseBtnClick = () => {
        if (headerRef.current) {
            headerRef.current.classList.remove("menu_open");
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname != "/") {
                setIsDark(true);
                return;
            }

            const hubSection = document.querySelector(
                ".hub"
            ) as HTMLElement | null;
            const scrollY = window.scrollY;
            const hubSectionTop = hubSection?.offsetTop || 0;

            if (scrollY >= hubSectionTop - 10) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        };

        addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header ref={headerRef} className={isDark ? "black" : ""}>
            <div className="container">
                <Link to="/" className="logo">
                    <img
                        className="header_logo"
                        src={
                            isDark
                                ? "/team-app-ts/img/black_logo.svg"
                                : "/team-app-ts/img/white_logo.png"
                        }
                        alt="team app logo"
                    />
                </Link>
                <button
                    className="menu_btn"
                    onClick={handleHamburgerClick}
                    aria-label="Open menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="menu"
                >
                    <img
                        src={
                            isDark
                                ? "/team-app-ts/img/black_menu.svg"
                                : "/team-app-ts/img/white_menu.svg"
                        }
                        alt="menu"
                    />
                </button>
                <nav id="menu">
                    <Link to="#">Product</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="#">Contact</Link>
                    <Link to="#">Login</Link>
                    <Link to="#" className="get_access_btn">
                        Get Access
                    </Link>
                    <button
                        className="close_btn"
                        onClick={handleCloseBtnClick}
                        aria-label="Close menu"
                        aria-expanded={!isMenuOpen}
                        aria-controls="menu"
                    >
                        <img
                            src="/team-app-ts/img/close_btn.svg"
                            alt="close button"
                        />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
