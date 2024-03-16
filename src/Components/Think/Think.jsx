import "./think.scss";
import React from "react";
import ThinkImg from "../Lib/img/ThinkImg.png";

function Think() {
    return (
        <>
            <div className="think" id="Pricing">
                <div className="container">
                    <div className="think__left">
                        <h2 className="think__left--heading">Think CI/CD for dev environments</h2>
                        <p className="think__left--text">We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.</p>

                        <div className="think__left--btns">
                            <button className="think__left--btn1">More on prebuilds</button>
                            <button className="think__left--btn1 think__btn2">Documentation</button>
                        </div>
                    </div>

                    <div className="think__right">
                        <img className="think__right--img" src={ThinkImg} alt="ThinkImg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Think