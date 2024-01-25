import PropTypes from 'prop-types';
import classes from './Content.module.css';
import cloud from "../../assets/cloud.svg";
import flowers from "../../assets/flowers.svg";
import hearts from "../../assets/hearts.svg";
import product from "../../assets/product.svg";
import star from "../../assets/star.svg";

Content.propTypes = {
    className: PropTypes.any,
};

export function Content(props) {

    const {className} = props;

    return (
        <div className={className}>
            <div className={classes.cloud}><img src={cloud} alt="cloud" /></div>
            <div className={classes.flowers}><img src={flowers} alt="flowers" /></div>
            <div className={classes.hearts}><img src={hearts} alt="hearts" /></div>
            <div className={classes.product}><img src={product} alt="product" /></div>
            <div className={classes.star}><img src={star} alt="star" /></div>
            <div className={classes.text1}>from 2019 to ∞</div>
            <div className={classes.text2}>CURIOUS DESIGNER, STORYTELLER, DIGITAL CREATOR</div>
            <div className={classes.text3}>
                <div>blending tech, art and community, my focus goes beyond beautiful interfaces.</div>
                <div>I craft inclusive, human-centred experiences, all tailored to your organization’s needs.</div>
            </div>
            <div>
                <button className={classes.text4}>MY WORK</button>
                <button className={classes.text4}>TALK TO ME</button>
            </div>
        </div>
    )
}

