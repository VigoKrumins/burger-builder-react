import React from 'react';

import buildControlClasses from './BuildControl.module.css';

import Button from '../../../UI/Button/Button';

const BuildControl = (props) => (
    <div className={buildControlClasses.BuildControl}>
        <div className={buildControlClasses.Label}>{props.label}:</div>
        <div>
            <Button
                btnType="Danger"
                clicked={props.removed}
                disabled={props.disabled ?? 'disabled'}>-</Button>
            <Button
                btnType="Success"
                clicked={props.added}>+</Button>
        </div>
    </div>
);

export default BuildControl;
