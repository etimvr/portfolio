import classes from './AboutMe.module.css';
import portrait from "../../assets/portrait.png";
import goose from "../../assets/goose.png";
import ramen from "../../assets/ramen.png";
import bubbleTea from "../../assets/bubble-tea.png";
import chess from "../../assets/chess.png";
import admin from "../../assets/works/admin.png";
import esti from "../../assets/works/esti.png";
import otherWorks from "../../assets/works/other-works.png";
import prequel from "../../assets/works/prequel.png";
import {Tag} from "../../components/Tag/Tag.jsx";

export function AboutMe() {

    return (
        <div className={classes.aboutMe} id="about-me">
            <div className={classes.inner}>
                <div className={classes.header}>ABOUT ME</div>
                <div style={{marginBottom: 60}}/>
                <div className={classes.verticalSplit}>
                    <div className={classes.picture1}><img src={portrait} alt="portrait"/></div>
                    <div>
                        <div className={classes.text1}>Hey, I’m Sasha, a senior product and visual designer building
                            experiences for Prequel in USA.
                        </div>
                        <div style={{marginBottom: 24}}/>
                        <div className={classes.text2}>More than anything, I thrive amidst ambition, passionate
                            curiosity,
                            humility and joy. I seek brave teams where, together, we can create lasting and meaningful
                            impact on people's lives, the society, and the world we live in.
                        </div>
                        <div style={{marginBottom: 48}}/>
                        <div className={classes.text3}>Skills</div>
                        <div style={{marginBottom: 24}}/>
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
                <div style={{marginBottom: 50}}/>
                <div className={classes.verticalSplit}>
                    <div className={classes.experience}>
                        <div className={classes.text4}>Experience</div>
                        <div style={{marginBottom: 32}}/>

                        <div className={classes.text5}>Prequel • Senior Product Designer • 12.2022 - present</div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.text6}>Part of the design team that completely redesigned, crafted and
                            shipped the brand new experience for Prequel's numerous products (Prequel, Gio, Oji, Esti)
                            that’s used by over 5 million people across the world.
                        </div>
                        <div style={{marginBottom: 32}}/>

                        <div className={classes.text5}>TechWings • Senior Product Designer • 11.2020 - 12.2022</div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.text6}>Worked as a product designer, contributing to several branding
                            and visual design projects for different clients.
                        </div>
                        <div style={{marginBottom: 32}}/>


                        <div className={classes.text5}>QLab • UI / UX Designer • 04.2019 - 12.2020</div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.text6}>Was part of design team in charge of refining our design system
                            for accessibility, defining guidelines for use, documenting design guidelines and educating
                            design team.
                        </div>
                        <div style={{marginBottom: 32}}/>

                    </div>
                    <div>
                        <div className={classes.text4}>Tools & Methods</div>
                        <div style={{marginBottom: 32}}/>
                        <div className={classes.text6}>CustDev, User Testing, Jobs-To-Be-Done, Journey Mapping, iOS /
                            Android Interface Principles, Effective MVP Engineering, Product Architecture, Figma,
                            Sketch, Principle, ProtoPie, Photoshop, Illustrator, After Effects, C4D, Blender.
                        </div>
                        <div style={{marginBottom: 32}}/>

                        <div className={classes.text4}>Contacts</div>
                        <div style={{marginBottom: 32}}/>
                        <div className={classes.link}><a href="mailto:sandraovershv@gmail.com"
                                                         style={{color: "black"}}>Email</a></div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.link}><a
                            href="https://www.linkedin.com/in/alexandra-shvetsova-20822a221/"
                            style={{color: "black"}}>LinkedIn</a></div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.link}><a href="https://t.me/pressur"
                                                         style={{color: "black"}}>Telegram</a></div>
                        <div style={{marginBottom: 16}}/>
                    </div>
                </div>
                <div style={{marginBottom: 40}}/>
                <div className={classes.text4}>Some facts about me...</div>
                <div style={{marginBottom: 32}}/>
                <div className={classes.facts}>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={goose} alt="goose"/></div>
                        <div className={classes.text6}>It’s my brother pink goose. We’ve been together for 8 years.
                        </div>
                    </div>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={ramen} alt="ramen"/></div>
                        <div className={classes.text6}>My favourite food is spicy noodles with chicken.</div>
                    </div>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={bubbleTea} alt="bubble-tea"/></div>
                        <div className={classes.text6}>Matcha bubble tea is the most delicious drink ever.</div>
                    </div>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={chess} alt="chess"/></div>
                        <div className={classes.text6}>In my free time I’m learning to play chess.</div>
                    </div>
                </div>
                <div style={{marginBottom: 100}}/>
                <div className={classes.header}>MY WORK</div>
                <div style={{marginBottom: 70}}/>
                <div className={classes.works}>
                    <div className={classes.work}>
                        <div className={classes.picture3}><img src={esti} alt="esti" width="700" height="450"/></div>
                        <div className={classes.text3}>Esti: Aesthetic Photo Editor</div>
                        <div style={{marginBottom: 24}}/>
                        <div className={classes.text6}>The perfect content creator toolkit: an app with consistent vibes
                            in mind.
                        </div>
                        <div style={{marginBottom: 20}}/>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.picture3}><img src={prequel} alt="prequel" width="700" height="450"/>
                        </div>
                        <div className={classes.text3}>Prequel: Photo & Video Editor</div>
                        <div style={{marginBottom: 24}}/>
                        <div className={classes.text6}>Photo and video editing app with an easy-to-use creative toolkit,
                            aesthetic effects and filters.
                        </div>
                        <div style={{marginBottom: 20}}/>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.picture3}><img src={admin} alt="admin" width="700" height="450"/></div>
                        <div className={classes.text3}>Admin Panel / Web</div>
                        <div style={{marginBottom: 24}}/>
                        <div className={classes.text6}>Admin service for internal use by developers, QA engineers and
                            content creators.
                        </div>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.picture3}><img src={otherWorks} alt="other-works" width="700"
                                                               height="450"/></div>
                        <div className={classes.text3}>Other works...</div>
                        <div style={{marginBottom: 24}}/>
                        <div className={classes.text6}>Here is a collection of various projects on different themes for
                            the soul and more. ✨
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 100}}/>
            </div>

        </div>
    )
}

