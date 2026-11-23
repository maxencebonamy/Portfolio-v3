import React from "react";
import "./Projects.scss";
import Project from "../../Components/Project/Project";
import projects from "./Projects.json";


function Projects() {
    const description = "After generating a maze, it is automatically solved by different algorithms that you can choose, both for the generation and for the resolution."

    return (
        <section id="projects">
            <h1>My projects</h1>
            <div id="projects_container">
                {
                    projects.map(e => e.important ? <Project name={e.name} description={e.description} skills={e.skills} github={e.github} run={e.run} video={e.video} /> : <></>)
                }
            </div>
            {/*<Project name="Portfolio" github="maxencebonamy.fr" run="maxencebonamy.fr" description={description} skills={["cpp", "sfml"]} video={null} />*/}
        </section>
    );
}


export default Projects;