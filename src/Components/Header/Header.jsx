import React from "react";
import "./Header.scss";
import Logo from "../Lib/img/Logo.svg"

function Header() {
    return (
        <>
            <div className="header" id="Features">
                <div className="container">
                    <a href="#Home" className="Logotip">
                        <img src={Logo} alt="Logo" className="Logo" />
                    </a>

                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <a className="header__link" href="#Features">Features</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#Pricing">Pricing</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#Blog">Blog</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#Docs">Docs</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#Changelog">Changelog</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#We're hiring">We're hiring</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="header__btn">Login</button>
                </div>
            </div>
        </>
    )
}

export default Header;