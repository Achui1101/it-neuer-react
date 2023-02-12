import ProgCard from "./ProgCard"
import "./Skills.css"

//images
import html from "../media/images/html.png"
import css from "../media/images/css.png"
import js from "../media/images/js.png"
import react from "../media/images/react.png"
import node from "../media/images/node.png"
import csharp from "../media/images/cs.png"

const Skills = () => {
    return (
        <div className="skills">
            <h2>Meine Skills</h2>
            <div className="skills-container">
                <ProgCard
                    image={html}
                    progress="90"
                />
                <ProgCard
                    image={css}
                    progress="90"
                />
                <ProgCard
                    image={js}
                    progress="60"
                />
                <ProgCard
                    image={react}
                    progress="60"
                />
                <ProgCard
                    image={node}
                    progress="40"
                />
                <ProgCard
                    image={csharp}
                    progress="60"
                />
            </div>
        </div>
    );
}
export default Skills;