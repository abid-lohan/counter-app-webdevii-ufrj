import React from "react";
import logo from "../logo.svg";
import Boot_logo from "../images/bootstrap-logo-shadow.png";

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div style={{ fontSize: "32px" }}>
                {" Total "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </div>
            <a href="https://react.dev">
                <img src={logo} style={{ height: "48px" }} alt="logo" />
            </a>
            <a href="https://getbootstrap.com/docs/4.6/getting-started/introduction/">
                <img src={Boot_logo} style={{ height: "48px" }} alt="logo" />
            </a>
            <a
                className="navbar-brand"
                href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
            >
                Watch: "React for Beginners"
            </a>
        </nav>
    );
};

export default NavBar;