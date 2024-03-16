import "./select.scss";
import React from "react";

function Select() {
    return (
        <>
            <div className="select">
                <div className="container">
                    <h1 className="select__heading">Select project,</h1>
                    <p className="select__text">check dependencies, checkout branch, view</p>
                    <p className="select__text">readme.txt, install tools, run build, run test,</p>
                    <h1 className="select__heading">start coding.</h1>
                </div>
            </div>
        </>
    )
}

export default Select;