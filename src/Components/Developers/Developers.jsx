import "./developers.scss";
import React from "react";
import User1 from "../Lib/img/User1.png";
import User2 from "../Lib/img/User2.png";
import User3 from "../Lib/img/User3.png";
import GitLab from "../Lib/img/GitLab.png";
import FreeCode from "../Lib/img/FreeCode.png";
import Dwave from "../Lib/img/Dwave.png";
import Google from "../Lib/img/Google.png";
import Amazon from "../Lib/img/Amazon.png";
import Facebook from "../Lib/img/Facebook.png";
import Uber from "../Lib/img/Uber.png";
import OpenAi from "../Lib/img/OpenAI.png";
import Intel from "../Lib/img/intel.png";
import Theia from "../Lib/img/Theia.png";
import Code from "../Lib/img/Code.png";
import Geeks from "../Lib/img/4Geeks.png";

function Developers() {
    return (
        <>
            <div className="developers">
                <div className="container">
                    <h1 className="developers__heading">Used by 400,000+ developers.</h1>
                    <div className="developers__users">
                        <div className="developers__users__user">
                            <p className="developers__users--text">GitPod is incredibly cool</p>
                            <p className="developers__users--text">In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
                            <div className="developers__users--flex">
                                <img src={User1} alt="User1" />
                                <div className="developers__flex--right">
                                    <h4 className="developers__right--heading">Ben Halpern</h4>
                                    <p className="developers__right--text">Creator and Co-founder <span className="developers__right--span">@forem</span> and <span className="developers__right--span">@ThePracticalDev</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="developers__users__user">
                            <p className="developers__users--text">Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.</p>
                            <p className="developers__users--text">Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard;</p>
                            <div className="developers__users--flex">
                                <img src={User2} alt="User1" />
                                <div className="developers__flex--right">
                                    <h4 className="developers__right--heading">Michael Friedrich</h4>
                                    <p className="developers__right--text">Developer Evangelist <span className="developers__right--span">@GitLab</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="developers__users__user">
                            <p className="developers__users--text">Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!</p>
                            <div className="developers__users--flex">
                                <img src={User3} alt="User1" />
                                <div className="developers__flex--right">
                                    <h4 className="developers__right--heading">Julius Volz</h4>
                                    <p className="developers__right--text">Creator <span className="developers__right--span">@PrometheusIO</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="developers__brends">
                        <div className="developers__brend">
                            <img className="developers__brends--img" src={GitLab} alt="GitLab" />
                            <img className="developers__brends--img" src={FreeCode} alt="FreeCode" />
                            <img className="developers__brends--img" src={Dwave} alt="Dwave" />
                            <img className="developers__brends--img" src={Google} alt="Google" />
                            <img className="developers__brends--img" src={Amazon} alt="Amazon" />
                            <img className="developers__brends--img" src={Facebook} alt="Facebook" />
                            <img className="developers__brends--img" src={Uber} alt="Uber" />
                        </div>

                        <div className="developers__brend">
                            <img className="developers__brends--img" src={OpenAi} alt="OpenAi" width={130} />
                            <img className="developers__brends--img" src={Intel} alt="Intel" />
                            <img className="developers__brends--img" src={Theia} alt="Theia" />
                            <img className="developers__brends--img" src={Code} alt="Code" />
                            <img className="developers__brends--img" src={Geeks} alt="Geeks" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Developers