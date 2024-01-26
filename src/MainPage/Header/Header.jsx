import classes from './Header.module.css';
import {Button} from "../../components/Button/Button.jsx";


export function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.text}>ALEKSANDRA S.</div>
            <div className={classes.rightSide}>
                <div className={classes.text}>MY WORK</div>
                <div className={classes.text}>ABOUT</div>
                <div className={classes.text}>RESUME</div>
                <Button>CONTACT ME</Button>
            </div>
        </div>
    )
}

