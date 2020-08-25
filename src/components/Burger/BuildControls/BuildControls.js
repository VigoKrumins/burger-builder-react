import React from 'react';

import buildControlsClasses from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Tomato', type: 'tomato' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={buildControlsClasses.BuildControls}>
        <p>Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                type={control.type}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]} />
        ))}
        <button
            className={buildControlsClasses.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default BuildControls;
