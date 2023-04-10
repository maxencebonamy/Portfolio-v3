import React from "react";
import "./Project.css";
import Tilt from "../Tilt/Tilt";


function Project({name, description, video, skills, github, run}) {
    const videoComponent = <video autoPlay loop muted preload="metadata">
        <source src={require("../../Assets/Videos/" + video)} type="video/mp4"/>
    </video>

    return (
        <Tilt className="project">
            <div className="project_skills_container">
                {
                    skills.map(
                        e => <div className="project_skill project_glass">
                            <img src={require("../../Assets/Images/Skills/" + e.toLowerCase() + ".webp")} />
                        </div>
                    )
                }
            </div>
            <div className="project_right_div">
                <div className="project_card">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    {videoComponent}
                </div>
                <div className="project_buttons_container">
                    {
                        github != null ? <a className="project_button" href={github} target="_blank">See the code</a> : <></>
                    }
                    {
                        run != null ? <a className="project_button" href={run} target="_blank">Test the program</a> : <></>
                    }
                </div>
            </div>
        </Tilt>
    );
}


export default Project;