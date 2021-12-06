import React from 'react';

import './Icon.module.css';

const icon = (props) => {
    return(
        // <img 
        //     src={require(`../../assets/images/${props.type}.svg`)} 
        //     alt={props.type}
        //     className={classes.Icon} />

        <div className={'Icon Icon--'+props.type}></div>
    );
}

export default icon;