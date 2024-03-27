import PropTypes from 'prop-types';
import classes from './Wave.module.css';

Wave.propTypes = {
    topColor: PropTypes.string,
    bottomColor: PropTypes.string,
    isInverted: PropTypes.bool
};

export function Wave(props) {

    const {topColor, bottomColor, isInverted = false} = props;

    return (
        <div style={{backgroundColor: isInverted ? topColor : bottomColor}}>
            <div className={isInverted ? classes.invertedWave :classes.wave} style={{backgroundColor: isInverted ? bottomColor : topColor}}/>
        </div>
    )
}

