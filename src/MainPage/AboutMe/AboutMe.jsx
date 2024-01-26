import classes from './AboutMe.module.css';
import portrait from "../../assets/portrait.png";
import {Tag} from "../../components/Tag/Tag.jsx";
import {Button} from "../../components/Button/Button.jsx";

export function AboutMe() {

    return (
        <div className={classes.aboutMe}>
            <div className={classes.verticalSplit}>
                <div className={classes.picture}><img src={portrait} alt="cloud"/></div>
                <div>
                    <div className={classes.text1}>Hey, I’m Sasha, a senior product and visual designer building experiences for a Prequel in USA.</div>
                    <div className={classes.text2}>More than anything, I thrive amidst ambition, passionate curiosity, humility and joy. I seek brave teams where, together, we can create lasting and meaningful impact on people's lives, the society, and the world we live in.</div>
                    <div className={classes.text3}>Skills</div>
                    <div className={classes.skillsTable}>
                        <Tag>Product design</Tag>
                        <Tag>Interaction</Tag>
                        <Tag>Research</Tag>
                        <Tag>Design Strategy</Tag>
                        <Tag>Mentoring</Tag>
                        <Tag>Graphic Design</Tag>
                        <Tag>Branding</Tag>
                        <Tag>3D Illustrations</Tag>
                    </div>
                </div>
            </div>
            <div className={classes.verticalSplit}>
                <div>experience</div>
                <div>
                    <div>tools&methods</div>
                    <div>contact</div>
                </div>
            </div>
            <div>facts about me</div>
        </div>
    )
}

