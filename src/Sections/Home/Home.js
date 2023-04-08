import React, {useEffect, useRef} from "react";
import "./Home.css";
import star from "../../Assets/Images/Star.png";


function Home() {
    return (
        <section id="home">
            <div id="home_title">
                <img className="star" id="home_star_right" src={star} />
                <h1>Hi, I'm Maxence.</h1>
                <h1>A Software Engineer.</h1>
                <img className="star" id="home_star_left" src={star} />
            </div>
        </section>
    );
}


export default Home;