import "./now.scss";
import React from "react";
import NowGitLab from "../Lib/img/Now GitLab.png";
import NowGitHub from "../Lib/img/New GitHub.png";
import NowBitbucket from "../Lib/img/New Bitbucket.png";
import TypeScript from "../Lib/img/TypeScript.png";
import Python from "../Lib/img/Python.png";
import Go from "../Lib/img/Go.png";
import Rust from "../Lib/img/Rust.png";
import Java from "../Lib/img/Java.png";
import Svelte from "../Lib/img/Svelte.png";
function Now() {
    return (
        <>
            <div className="now">
                <div className="container">
                    <h1 className="now__heading">Get started now</h1>
                    <div className="now__boxes">
                        <div className="now__left">
                            <h2 className="now__left--heading">Connect Git repository</h2>
                            <p className="now__left--text">Select a Git provider to start with an existing project from any Git context.</p>
                            <button className="now__left--btn">
                                <img className="now__btn--img" src={NowGitLab} alt="NowGitLab" />
                                <p className="now__btn--text">Continue with GitLab</p>
                            </button><br />
                            <button className="now__left--btn2">
                                <img className="now__btn--img" src={NowGitHub} alt="NowGitHub" />
                                <p className="now__btn--text">Continue with GitHub</p>
                            </button><br />
                            <button className="now__left--btn3">
                                <img className="now__btn--img" src={NowBitbucket} alt="NowBitbucket" />
                                <p className="now__btn--text">Continue with Bitbucket</p>
                            </button>
                            <p className="now__left--text">Or prefix any GitLab, GitHub or Bitbucket URL with</p>
                            <p className="now__left--bottom">gitpod.io/#</p>
                        </div>
                        <div className="now__right">
                            <h1 className="now__right--heading">Launch an example workspace</h1>
                            <p className="now__right--text">Dive into one of our example workspaces</p>
                            <div className="now__right--box">
                                <div className="now__right--left">
                                    <img className="now__right--img" src={TypeScript} alt="TypeScript" />
                                    <p className="now__right--name">Node or TypeScript</p>
                                </div>
                                <button className="now__right--btn">Launch workspace</button>
                            </div>
                            <div className="now__right--box">
                                <div className="now__right--left">
                                    <img className="now__right--img" src={Python} alt="Python" />
                                    <p className="now__right--name">Python</p>
                                </div>
                                <button className="now__right--btn">Launch workspace</button>
                            </div>
                            <div className="now__right--box">
                                <div className="now__right--left">
                                    <img className="now__right--img" src={Go} alt="Go" />
                                    <p className="now__right--name">Go</p>
                                </div>
                                <button className="now__right--btn">Launch workspace</button>
                            </div>
                            <div className="now__right--box">
                                <div className="now__right--left">
                                    <img className="now__right--img" src={Rust} alt="Rust" />
                                    <p className="now__right--name">Rust</p>
                                </div>
                                <button className="now__right--btn">Launch workspace</button>
                            </div>
                            <div className="now__right--box">
                                <div className="now__right--left">
                                    <img className="now__right--img" src={Java} alt="Java" />
                                    <p className="now__right--name">Java</p>
                                </div>
                                <button className="now__right--btn">Launch workspace</button>
                            </div>
                            <div className="now__right--box">
                                <div className="now__right--left">
                                    <img className="now__right--img" src={Svelte} alt="Svelte" />
                                    <p className="now__right--name">Svelte</p>
                                </div>
                                <button className="now__right--btn">Launch workspace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Now