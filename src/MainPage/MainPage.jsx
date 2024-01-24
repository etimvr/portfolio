import {Header} from "./Header/Header.jsx";
import classes from './MainPage.module.css';

export function MainPage() {

    return (
        <>
            <Header className={classes.mainPage}/>
            <div className={classes.mainPage}>
                Hello world!
            </div>
            <>Bottom</>
        </>
    )
}

