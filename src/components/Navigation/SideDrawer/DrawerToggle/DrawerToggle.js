import React from 'react';

import drawerToggleClasses from './DrawerToggle.module.css';

const DrawerToggle = (props) => {
    let attachedClasses = [drawerToggleClasses.DrawerToggle];
    if (props.sideDrawerOpen) attachedClasses = [drawerToggleClasses.DrawerToggle, drawerToggleClasses.Open];

    return (
        <button
            className={attachedClasses.join(' ')}
            onClick={props.clicked}>
            <div>
                <span className={drawerToggleClasses.Line}></span>
                <span className={drawerToggleClasses.Line}></span>
                <span className={drawerToggleClasses.Line}></span>
            </div>
        </button>
    );
}

export default DrawerToggle;
