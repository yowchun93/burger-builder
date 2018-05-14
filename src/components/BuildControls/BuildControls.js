import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    return(
        <div className={classes.BuildControl}>
            {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>  
            ))}
        </div>
    )
}

export default buildControls;