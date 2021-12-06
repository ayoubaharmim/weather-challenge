import React from 'react';
import Preview from '../../assets/images/Preview.svg';
import classes from './Preview.module.css';

const preview = (props) => {
    return(
        <img
            src={Preview}
            alt="Weather App Icon"
            className={classes.Preview} />
    );
}

export default preview;
