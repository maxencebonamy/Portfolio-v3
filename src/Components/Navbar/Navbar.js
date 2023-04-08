import React, {useEffect, useState} from "react";
import "./Navbar.css";
import logo from "../../Assets/Images/Logo.png";


class Navbar extends React.Component {
    state = {
        extanded: true
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmout() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {
        this.setState({
            extanded: window.scrollY <= 100
        });
    };

    render() {
        return (
            <div id="navbar" className={this.state.extanded ? "navbar_extanded" : "navbar_retracted"}>
                <img src={logo} />
                <div id="navbar_sections">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        );
    }
}


export default Navbar;