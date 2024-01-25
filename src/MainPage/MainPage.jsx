import {Header} from "./Header/Header.jsx";
import classes from './MainPage.module.css';
import {Content} from "./Content/Content.jsx";

export function MainPage() {

    return (
        <>
            <Header className={classes.header}/>
            <Content className={classes.mainPage}/>
            <>Bottom</>
        </>
    )
}

