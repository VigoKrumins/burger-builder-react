import React from 'react';

import sideDrawerClasses from './SideDrawer.module.css';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
    let attachedClasses = [sideDrawerClasses.SideDrawer, sideDrawerClasses.Close];
    if (props.open) attachedClasses = [sideDrawerClasses.SideDrawer, sideDrawerClasses.Open]

    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed}/>
            <aside className={attachedClasses.join(' ')}>
                <div className={sideDrawerClasses.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </aside>
        </Aux>
    );
};

export default SideDrawer;
