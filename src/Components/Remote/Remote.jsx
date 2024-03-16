import "./remote.scss";
import React from "react";
import RemoteImg from "../Lib/img/RemoteImg.svg";
import ChromeImg from "../Lib/img/ChromeExtension.png";
import FirefoxImg from "../Lib/img/FirefoxExtension.png";

function Remote() {
    return (
        <>
            <div className="remote">
                <div className="container">
                    <h1 className="remote__heading">Remote-first. Secure by design.</h1>
                    <img className="remote__img" src={RemoteImg} alt="RemoteImg" />
                    <p className="remote__text">You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.</p>
                    <div className="remote__ChFExtensions">
                        <img className="remote__ChFExtension" src={ChromeImg} alt="ChromeImg" />
                        <img className="remote__ChFExtension" src={FirefoxImg} alt="FirefoxImg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Remote