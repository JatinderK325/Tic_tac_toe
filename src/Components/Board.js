import React from 'react';
import Box from './Box';
import classes from './Board.module.css';

const Board = (props) => {
    return (
        <div className = {classes.board}>
            {props.board.map((value, id) => {
                return (
                    <Box
                        val = {value}
                        onClick = {() => value === null && props.onClick(id)}
                    >
                    </Box>
                )
            })}
        </div>
    );
}

export default Board;