import PropTypes from 'prop-types';
import classes from './Header.module.css';

Header.propTypes = {
    className: PropTypes.any,
};

export function Header(props) {

    const {className} = props;

    return (
        <div className={className}>
            <div className={`${classes.header} ${classes.text}`}>
                <div >ALEKSANDRA S.</div>
                <div className={classes.rightSide}>
                    <div>MY WORK</div>
                    <div>ABOUT</div>
                    <div>RESUME</div>
                    <div>CONTACT ME</div>
                </div>
            </div>
        </div>
    )
}

