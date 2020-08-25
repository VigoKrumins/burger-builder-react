import React from 'react';

import navigationItemClasses from './NavigationItem.module.css';

const NavigationItem = (props) => (
    <li className={navigationItemClasses.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? navigationItemClasses.active : null}>{props.children}</a>
    </li>
);

export default NavigationItem;
