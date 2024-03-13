import classes from './Content.module.css';
import cloud from "../../assets/cloud.svg";
import flowers from "../../assets/flowers.svg";
import hearts from "../../assets/hearts.svg";
import product from "../../assets/product.svg";
import star from "../../assets/star.svg";
import arrowUp from "../../assets/arrow-up.svg";
import smile from "../../assets/smile.svg";
import {Button} from "../../components/Button/Button.jsx";
import {scrollToId} from "../../helpers.js";


export function Content() {
    return (
        <div className={classes.mainPage}>
            <div className={classes.inner}>
                <div className={classes.cloud}><img src={cloud} alt="cloud"/></div>
                <div className={classes.flowers}><img src={flowers} alt="flowers"/></div>
                <div className={classes.hearts}><img src={hearts} alt="hearts"/></div>
                <div className={classes.product}><img src={product} alt="product"/></div>
                <div className={classes.star}><img src={star} alt="star"/></div>
                <div className={classes.text1}>from 2019 to ∞</div>
                <div className={classes.text2}>CURIOUS DESIGNER, STORYTELLER, DIGITAL CREATOR</div>
                <div className={classes.text3}>
                    <div>blending tech, art and community, my focus goes beyond beautiful interfaces.</div>
                    <div>I craft inclusive, human-centred experiences, all tailored to your organization’s needs.</div>
                </div>
                <div className={classes.buttons}>
                    <Button icon={arrowUp} onClick={()=>{scrollToId('my-work')}}>MY WORK</Button>
                    <Button icon={smile}>CONTACT ME</Button>
                </div>

            </div>
        </div>
    )
}

