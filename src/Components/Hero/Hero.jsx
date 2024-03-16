import React from "react";
import "./Hero.scss";
import GitLab from "../Lib/img/Git Lab.png";
import GitHub from "../Lib/img/Git Hub.png";
import Git3 from "../Lib/img/Git 3.png";
import HeroImg from "../Lib/img/Hero img.png";

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero__left">
                        <h1 className="hero__left--heading">Always</h1>
                        <h1 className="hero__left--heading">Ready to Code.</h1>
                        <div className="hero__left--texts">
                            <p className="hero__left--text">Spin up fresh, automated dev environments</p>
                            <p className="hero__left--text">for each task, in the cloud, in seconds.</p>
                        </div>
                        <div className="hero__left--box">
                            <button className="hero__left--btn">Try Now</button>
                            <div className="hero__left--spanbox">
                                <p className="hero__left--span">Open a workspace.</p>
                                <p className="hero__left--span">Start from any Git context.</p>
                            </div>
                        </div>
                        <div className="hero__left--imgbox">
                            <img className="hero__left--img" src={GitLab} alt="GitLab" />
                            <img className="hero__left--img" src={GitHub} alt="GitHub" />
                            <img className="hero__left--img" src={Git3} alt="Git3" />
                        </div>
                    </div>

                    <div className="hero__right">
                        <img className="Hero__img" src={HeroImg} alt="HeroImage" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;