import classes from "../../Cases/Esti/Esti.module.css";
import intro from "../../assets/esti/intro.png";
import whatWeDidFirst from "../../assets/esti/what-we-did-first.png";
import temp from "../../assets/esti/temp.png";
import sketches from "../../assets/esti/sketches.png";
import research from "../../assets/esti/research.png";
import jackie from "../../assets/esti/jackie.png";
import lauren from "../../assets/esti/lauren.png";
import massiel from "../../assets/esti/massiel.png";
import chart1 from "../../assets/esti/chart1.png";
import chart2 from "../../assets/esti/chart2.png";
import summary from "../../assets/esti/summary.png";
import {Button} from "../../components/Button/Button.jsx";
import arrowUp from "../../assets/arrow-up.svg";
import {scrollToId} from "../../helpers.js";

export function Esti() {

    return (
        <div className={classes.page}>
            <div className={classes.inner}>
                <div>Esti: Aesthetic Photo Editor</div>
                <div style={{marginBottom: 12}}/>
                <div>The perfect content creator toolkit: an app with consistent vibes in mind.</div>
                <div style={{marginBottom: 32}}/>
                <div><img src={intro} alt="intro"/></div>
                <div style={{marginBottom: 79}}/>
                <div className={classes.columns}>
                    <div>
                        <div>
                            My Role
                        </div>
                        <div>
                            Senior Product Designer
                        </div>
                    </div>
                    <div>
                        <div>
                            Platform
                        </div>
                        <div>
                            iOS / Web
                        </div>
                    </div>
                    <div>
                        <div>
                            My Team
                        </div>
                        <div>
                            1 Designer
                            {/*5 Engineers*/}
                            {/*2 Product Manager*/}
                            {/*2 Product Analyst*/}
                            {/*2 UX Researcher*/}
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 100}}/>
                <div className={classes.box}>
                    <div>What I did?</div>
                    <div>On this project I worked as a product designer, handling various tasks including UX & UI
                        design, prototyping, user interview, research and usability testing. This role demanded
                        adaptability as I explored different aspects of product development.

                        I collaborated with founders, product managers, marketing team, research team, development and
                        analytics team.
                    </div>
                </div>
                <div style={{marginBottom: 148}}/>
                <div>Quick look at Esti</div>
                <div style={{marginBottom: 42}}/>
                <div><img src={temp} alt="temp"/></div>
                {/*todo make properly later*/}
                <div style={{marginBottom: 100}}/>
                <div>One of the most challenging and innovative projects for Esti was Planner</div>
                <div style={{marginBottom: 42}}/>
                <div className={classes.columns}>
                    <div>
                        <div>
                            Problems
                        </div>
                        <div>
                            After thorough market research and with some feedback from users I pinpointed a user need
                            that Esti could solve: our users are micro and macro influencers and they more often than
                            not plan their posts.
                        </div>
                    </div>
                    <div>
                        <div>
                            Goals
                        </div>
                        <div>
                            Provide our users with an easy-to-use handy tool for planning social media posts. In the
                            long run this feature should raise app's retention which will indirectly affect the revenue.
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 100}}/>
                <div>What we did first?</div>
                <div>In order to validate our decisions and create a truly high-quality feature, we decided to start by
                    analyzing competitors on the same field.
                </div>
                <div><img src={whatWeDidFirst} width={1473} alt="what-we-did-first"/></div>
                <div style={{marginBottom: 100}}/>
                <div>Insight from product analyst</div>
                <div style={{marginBottom: 32}}/>
                <div>Product Analytic and I looked for the data on CRs to export and to sharing to different social
                    media platforms from our app. A short analysis showed that Esti users share their edits on social
                    media pretty often. This insight worked as a validation for our new feature.
                </div>
                <div style={{marginBottom: 100}}/>
                <div>Some simple sketches...</div>
                <div style={{marginBottom: 32}}/>
                <div>After conducting research, I decided to try sketching a few simple drafts of the future feature.
                    Visualizing in sketch format helps to break away from the constraints of the familiar design system
                    and think out of the box. In the end, I chose the most promising concept and began to design it in
                    detail.
                </div>
                <div style={{marginBottom: 42}}/>
                <div><img src={sketches} width={1420} alt="sketches"/></div>
                <div style={{marginBottom: 100}}/>
                <div>Research</div>
                <div style={{marginBottom: 42}}/>
                <div className={classes.columns}>
                    <div className={classes.item}>
                        <div className={classes.box}>
                            We conducted 5 user interviews, which allowed us to test our hypotheses and validate
                            solutions.

                            Additionally, besides the planner feature, we tested the onboarding and main screen and
                            discovered new insights.
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.box}>
                            To ensure higher quality results from the interviews, I created prototypes.

                            At each stage of the interview, we asked questions and inquired about the user's feelings to
                            better understand their experience.
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 64}}/>
                <div><img src={research} alt="research"/></div>
                <div style={{marginBottom: 16}}/>
                <div>Why only 5 people? We used NNG approach with conducting only 5 interviews.</div>
                <div style={{marginBottom: 100}}/>
                <div>Shortlist of the questions</div>
                <div style={{marginBottom: 42}}/>
                <div className={classes.shortlist}>
                    <div>What are your thoughts on having a planner features in the photo editor?</div>
                    <div>Do you understand how to use it?</div>
                    <div>Do you recognize what the calendar icon represents?</div>
                    <div>Do you understand the preview of the photo on the date in the calendar?</div>
                    <div>Do you understand when the photo was posted to the Instagram?</div>
                </div>
                <div style={{marginBottom: 64}}/>
                <div>Esti user personas</div>
                <div style={{marginBottom: 42}}/>
                <div className={classes.shortlist}>
                    <div className={classes.personaBox}>
                        <div><img src={jackie} alt="jackie"/></div>
                        Jackie, 35 y.o., Austin, CA, USA
                    </div>
                    <div className={classes.personaBox}>
                        <div><img src={lauren} alt="lauren"/></div>
                        Lauren, 29 y.o., Los Angeles, CA, USA
                    </div>
                    <div className={classes.personaBox}>
                        <div><img src={massiel} alt="massiel"/></div>
                        Massiel, 30 y.o., San Francisco, CA, USA
                    </div>
                </div>
                <div style={{marginBottom: 64}}/>
                <div>Here you can see some stats from the interviews</div>
                <div style={{marginBottom: 42}}/>
                <div><img src={chart1} alt="chart1"/></div>
                <div style={{marginBottom: 16}}/>
                <div>Based on this chart, around 80% of users are interested in the planner.</div>
                <div style={{marginBottom: 42}}/>
                <div><img src={chart2} alt="chart2"/></div>
                <div style={{marginBottom: 16}}/>
                <div>Roughly half of the users struggle to understand the current UX of the planner.</div>
                <div style={{marginBottom: 64}}/>
                <div>Summary</div>
                <div><img src={summary} alt="summary"/></div>
                <div style={{marginBottom: 64}}/>
                <div>A few other insights...</div>
                <div style={{marginBottom: 42}}/>
                <div className={classes.columns}>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            Onboarding videos were too vague...
                        </div>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            I don't understand an icon in the app's library.
                        </div>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            I wish I knew about batch editing feature sooner!
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 64}}/>
                <div>After conducting research, I focused on the following points:</div>
                <div style={{marginBottom: 32}}/>
                <div>1. Improve the planner's UX. Conduct additional market research, taking into account the results of
                    user interviews.
                </div>
                <div>2. Refine the content on the onboarding screens, as we noticed issues among users during the
                    interviews.
                </div>
                <div>3. Change the zero state of the main screen, making it more aesthetically pleasing and selecting
                    non-stock looking content.
                </div>
                <div style={{marginBottom: 100}}/>
                <div>Let’s start designing</div>
                <div style={{marginBottom: 42}}/>
                <div>Planner Zero Screen</div>
                <div style={{marginBottom: 42}}/>
                {/*    box*/}
                <div style={{marginBottom: 64}}/>
                <div>Entry Point</div>
                <div style={{marginBottom: 42}}/>
                {/*    box*/}
                <div style={{marginBottom: 64}}/>
                <div>Planner Screen</div>
                <div style={{marginBottom: 42}}/>
                {/*    box*/}
                <div style={{marginBottom: 64}}/>
                <div>Context Menu</div>
                <div style={{marginBottom: 42}}/>
                {/*    box*/}
                <div style={{marginBottom: 64}}/>
                <div>Quick Edit</div>
                <div style={{marginBottom: 42}}/>
                {/*    box*/}
                <div style={{marginBottom: 64}}/>
                <div>Redesigning Onboarding</div>
                <div style={{marginBottom: 32}}/>
                <div>After the user interviews, we found out that the current onboarding was unclear to users.
                    Therefore, I redesigned it to make the content simpler, more aesthetic, and understandable.
                </div>
                <div style={{marginBottom: 64}}/>
                <div className={classes.columns}>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            I didn't like the second onboarding screen. It has too much specific information, and the
                            animation is very fast.
                        </div>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            I think the second onboarding screen shows B/A. I didn't notice that there are 4 variations
                            of the photo.
                        </div>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            It took me about a minute to understand the meaning of the third onboarding screen.
                        </div>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            I thought the third onboarding screen was not only about Copy/Paste presets but also about
                            planning the IG grid.
                        </div>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            I didn't like the image after opening the application; it looks like a stock photo compared
                            to the previous ones.
                        </div>
                    </div>
                    <div className={classes.item2}>
                        <div className={classes.box}>
                            On the third onboarding screen, make it 6 photos instead of 5; the empty space is a bit
                            annoying.
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 64}}/>
                {/*    box*/}
                <div style={{marginBottom: 100}}/>
                <Button icon={arrowUp} onClick={() => {
                    scrollToId('my-work')
                }}>NEXT CASE</Button>
                <div style={{marginBottom: 100}}/>
            </div>
        </div>
    )
}

