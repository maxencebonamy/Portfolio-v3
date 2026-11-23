import React from "react";
import "./About.scss";
import photo from "../../Assets/Images/Photo.png";
import Tilt from "../../Components/Tilt/Tilt";


function About() {
    return (
        <section id="about">
            <h1>About me</h1>
            <Tilt id="about_box">
                <div id="about_image">
                    <img src={photo} />
                </div>
                <div id="about_card">
                    <h2>Maxence Bonamy</h2>
                    <p>
                        I am a student engineer at ESEO, a school specializing in the fields of computer science and electronics. My passion for programming goes back to the age of 11, and since then I have acquired solid skills in software development, websites and even hardware.
                    </p>
                    <p>
                        Currently seeking a 4-month internship starting in July 2023 to continue my apprenticeship, I am available to discuss any internship opportunities or to provide additional information about my skills and experience.
                    </p>
                </div>
            </Tilt>
        </section>
    );
}


export default About;