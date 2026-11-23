import React from "react";
import "./Navbar.scss";
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
            extanded: window.scrollY <= 1
        });
    };

    render() {
        return (
            <div id="navbar" className={this.state.extanded ? "navbar_extanded" : "navbar_retracted"}>
                <a href="/"><img src={logo} alt="Logo" /></a>
                <div id="navbar_sections">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </div>
            </div>
        );
    }
}


export default Navbar;