import "./App.css";
import "./Assets/Colors";
import Home from "./Sections/Home/Home";
import Circle from "./Components/Circle/Circle";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Sections/About/About";
import CallToAction from "./Components/CallToAction/CallToAction";
import React from "react";


function App() {
    console.log("document-height",document.documentElement.offsetHeight);

    return (
        <div id="app">
            <section id="app_background">
                <Circle x={100} y={100} color={"#4162d8"} radius={500} />
                <Circle x={-100} y={window.innerHeight - 100} color={"#4162d8"} radius={500} />
                <Circle x={200} y={window.innerHeight + 600} color={"#4162d8"} radius={500} />
                <div id="app_overlay" />
            </section>
            <section id="app_content">
                <Home />
                <About />
            </section>
            <Navbar />
            <CallToAction />
        </div>
    );
}


export default App;
