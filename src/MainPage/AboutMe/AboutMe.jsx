import classes from './AboutMe.module.css';
import portrait from "../../assets/portrait.png";
import goose from "../../assets/goose.png";
import ramen from "../../assets/ramen.png";
import bubbleTea from "../../assets/bubble-tea.png";
import chess from "../../assets/chess.png";
import {Tag} from "../../components/Tag/Tag.jsx";

export function AboutMe() {

    return (
        <div className={classes.aboutMe} id="about-me">
            <div className={classes.verticalSplit}>
                <div className={classes.picture1}><img src={portrait} alt="portrait"/></div>
                <div>
                    <div className={classes.text1}>Hey, I’m Sasha, a senior product and visual designer building
                        experiences for a Prequel in USA.
                    </div>
                    <div className={classes.text2}>More than anything, I thrive amidst ambition, passionate curiosity,
                        humility and joy. I seek brave teams where, together, we can create lasting and meaningful
                        impact on people's lives, the society, and the world we live in.
                    </div>
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
            <div style={{marginBottom: 50}}  />
            <div className={classes.verticalSplit}>
                <div className={classes.experience}>
                    <div className={classes.text4}>Experience</div>

                    <div className={classes.text5}>Prequel • Senior Product Designer • 12.2022 - present</div>
                    <div className={classes.text6}>Part of the design team that completely redesigned, crafted and shipped the brand new experience for Prequel's numerous products (Prequel, Gio, Oji, Esti) that’s used by over 5 million people across the world.</div>


                    <div className={classes.text5}>TechWings • Senior Product Designer • 11.2020 - 12.2022</div>
                    <div className={classes.text6}>Worked as a product designer, contributing to several branding and visual design projects for different clients.</div>


                    <div className={classes.text5}>QLab • UI / UX Designer • 04.2019 - 12.2020</div>
                    <div className={classes.text6}>Was part of design team in charge of refining our design system for accessibility, defining guidelines for use, documenting design guidelines and educating design team.</div>

                </div>
                <div>
                    <div className={classes.text4}>Tools & Methods</div>
                    <div className={classes.text6}>CustDev, User Testing, Jobs-To-Be-Done, Journey Mapping, iOS / Android Interface Principles, Effective MVP Engineering,  Product Architecture, Figma, Sketch, Principle, ProtoPie, Photoshop, Illustrator, After Effects, C4D, Blender. </div>

                    <div className={classes.text4}>Contacts</div>
                    <div className={classes.link}><a href="mailto:sandraovershv@gmail.com" style={{color: "black"}}>Email</a></div>
                    <div className={classes.link}><a href="https://www.linkedin.com/in/alexandra-shvetsova-20822a221/" style={{color: "black"}}>LinkedIn</a></div>
                    <div className={classes.link}><a href="https://t.me/pressur" style={{color: "black"}}>Telegram</a></div>
                </div>
            </div>
            <div style={{marginBottom: 40}}  />
            <div className={classes.text4}>Some facts about me...</div>
            <div className={classes.facts}>
                <div className={classes.fact}>
                    <div className={classes.picture2}><img src={goose} alt="goose"/></div>
                    <div className={classes.text6}>It’s my brother - pink goose.  We’ve been together 8 years.</div>
                </div>
                <div className={classes.fact}>
                    <div className={classes.picture2}><img src={ramen} alt="ramen"/></div>
                    <div className={classes.text6}>My favourite food is spicy noodles with chicken.</div>
                </div>
                <div className={classes.fact}>
                    <div className={classes.picture2}><img src={bubbleTea} alt="bubble-tea"/></div>
                    <div className={classes.text6}>Bubble tea with matcha is the most delicious drink ever.</div>
                </div>
                <div className={classes.fact}>
                    <div className={classes.picture2}><img src={chess} alt="chess"/></div>
                    <div className={classes.text6}>In my free time I’m learning to play chess.</div>
                </div>
            </div>
        </div>
    )
}

