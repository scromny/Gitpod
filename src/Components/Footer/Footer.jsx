import "./footer.scss";
import React from "react";
import FooterLogo from "../Lib/img/FooterLogo.svg";
import FooterImg from "../Lib/img/Copyright ©.png";
import FooterTwiter from "../Lib/img/FooterTwiter.svg";
import FooterGitHub from "../Lib/img/FooterGitHub.svg";
import FooterSms from "../Lib/img/FooterSms.svg";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__boxes">
                        <div className="footer__links">
                            <p className="footer__link--h">Gitpod</p>
                            <a className="footer__link" href="#Home">Home</a>
                            <a className="footer__link" href="#Features">Features</a>
                            <a className="footer__link" href="#Pricing">Pricing</a>
                            <a className="footer__link" href="#Changelog">Changelog</a>
                            <a className="footer__link" href="#Self-Hosted">Self-Hosted</a>
                            <a className="footer__link" href="#GitpodvsGitHub">Gitpod vs GitHub Codespaces</a>
                            <a className="footer__link" href="#Status">Status</a>
                        </div>
                        <div className="footer__links">
                            <p className="footer__link--h">Developer</p>
                            <a className="footer__link" href="#Gettingstarted">Getting started</a>
                            <a className="footer__link" href="#Screencasts">Screencasts</a>
                            <a className="footer__link" href="#Blog">Blog</a>
                            <a className="footer__link" href="#Documentation">Documentation</a>
                            <a className="footer__link" href="#Report">Report a bug</a>
                            <a className="footer__link" href="#Community">Community</a>
                        </div>
                        <div className="footer__links">
                            <p className="footer__link--h">Company</p>
                            <a className="footer__link" href="#About">About</a>
                            <a className="footer__link zvyozdcka" href="#Careers">Careers</a>
                            <a className="footer__link" href="#Contact">Contact</a>
                            <a className="footer__link" href="#MediaKit">Media Kit</a>
                        </div>
                        <div className="footer__links">
                            <p className="footer__link--h">Legal</p>
                            <a className="footer__link" href="#Imprint">Imprint</a>
                            <a className="footer__link" href="#Terms">Terms of Service</a>
                            <a className="footer__link" href="#Privacy">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__bottom--left">
                            <img className="fotter__left--logo" src={FooterLogo} alt="FooterLogo" />
                            <img className="footer__left--img" src={FooterImg} alt="Copyright" />
                            <p className="footer__lrft--text">2021Gitpod</p>
                        </div>
                        <div className="footer__bottom--right">
                            <img className="footer__right--img" src={FooterTwiter} alt="FooterTwiter" />
                            <img className="footer__right--img" src={FooterGitHub} alt="FooterGitHub" />
                            <img className="footer__right--img" src={FooterSms} alt="FooterSms" />
                        </div>
                    </div>

                </div>
                <div className="footer__minbox">
                    <p className="footer__minbox--text">This website uses cookies to enhance the user experience. Read our <span className="privacypolicy">privacy policy</span> for more info.</p>
                    <button className="footer__minbox--btn">Accept Cookies</button>
                </div>
            </div>
        </>
    )
}

export default Footer