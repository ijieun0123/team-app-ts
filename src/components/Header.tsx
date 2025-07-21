import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

const Header: React.FC = () => {
    const location = useLocation();
    const headerRef = useRef<HTMLElement | null>(null);
    const [isWhiteBg, setIsWhiteBg] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // 헤더 스크롤 이벤트 ( show, hide )
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 스크롤이 최상단이면 헤더를 보이게
            if (currentScrollY === 0) {
                setShowHeader(true);
            }
            // 스크롤 할 경우 헤더를 안 보이게
            else {
                setShowHeader(false);
            }

            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY < 50) {
                setShowHeader(true); // 커서가 화면 상단 근처면 다시 헤더 보이기
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [lastScrollY]);

    // 햄버거 메뉴 클릭 이벤트
    const handleHamburgerClick = () => {
        if (headerRef.current) {
            headerRef.current.classList.add("menu_open");
        }
        setIsMenuOpen(true);
    };

    // 클로즈 버튼 클릭 이벤트
    const handleCloseBtnClick = () => {
        if (headerRef.current) {
            headerRef.current.classList.remove("menu_open");
        }
        setIsMenuOpen(false);
    };

    // 헤더 스크롤 이벤트 ( white_bg )
    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== "/") {
                setIsWhiteBg(true);
                return;
            }

            const scrollY = window.scrollY;

            if (scrollY === 0) {
                setIsWhiteBg(false);
            } else {
                setIsWhiteBg(true);
            }
        };

        handleScroll();
        addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <header
            ref={headerRef}
            className={`${showHeader ? "show" : "hide"} ${
                isWhiteBg ? "white_bg" : ""
            }`}
        >
            <div className="container">
                <Link to="/" className="logo">
                    <img
                        className="header_logo"
                        src={
                            isWhiteBg
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
                            isWhiteBg
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
