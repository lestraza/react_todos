import React from 'react';

import morningMist from '../../images/morning_mist.jpg';
function Background(props) {
    return (
        <div style={{background: `url(${morningMist}) no-repeat`, backgroundSize: `contain`}}>
            {props.children}
        </div>
    )
}

export default Background
