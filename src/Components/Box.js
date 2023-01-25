import React from 'react';
import './Box.css';
const Box = (props) => {
    const style = props.val === 'X' ? 'box x' : 'box o';
    return(
        <button className={style} onClick={props.onClick}>{props.val}</button>
    );
}

export default Box;