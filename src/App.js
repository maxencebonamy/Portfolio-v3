import "./App.css";
import "./Assets/Colors";
import Home from "./Sections/Home/Home";
import Circle from "./Components/Circle/Circle";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Sections/About/About";
import CallToAction from "./Components/CallToAction/CallToAction";
import React from "react";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Footer from "./Sections/Footer/Footer";


function App() {
    const circles = [];
    for (let i = 0; i < 6; ++i) {
        const x = window.innerWidth / 15 * (i % 2 === 0 ? 1 : -1);
        const y = window.innerHeight * i;
        const radius = window.innerWidth / (i % 3 === 0 ? 3 : 4);
        circles.push(
            <Circle x={x} y={y} color={"#4162d8"} radius={radius} />
        )
    }

    return (
        <div id="app">
            <section id="app_background">
                {
                    circles
                }
                {/*<Circle x={window.innerWidth / 15} y={100} color={"#4162d8"} radius={window.innerWidth / 3} />*/}
                {/*<Circle x={-window.innerWidth / 15} y={window.innerHeight - 100} color={"#4162d8"} radius={window.innerWidth / 3} />*/}
                {/*<Circle x={window.innerWidth / 15} y={window.innerHeight + window.innerWidth / 2} color={"#4162d8"} radius={window.innerWidth / 3} />*/}
                {/*<div id="app_overlay" />*/}
            </section>
            <section id="app_content">
                <Home />
                <About />
                <Projects />
                <Skills />
                <Footer />
            </section>
            <Navbar />
            <CallToAction />
        </div>
    );
}


export default App;
