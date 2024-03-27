import {Content} from "./Content/Content.jsx";
import {AboutMe} from "./AboutMe/AboutMe.jsx";
import {Header} from "./Header/Header.jsx";
import {Footer} from "./Footer/Footer.jsx";
import {colors} from "../colors.js";
import {Wave} from "../components/Wave/Wave.jsx";


export function MainPage() {

    return (
        <>
            <Header color={colors.darkGreen}/>
            <Content/>
            <Wave topColor={colors.darkGreen} bottomColor={colors.milkWhite}/>
            <AboutMe/>
            <Footer color={colors.darkGreen}/>
        </>
    )
}

