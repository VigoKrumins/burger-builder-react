import React from 'react';

import toolbarClasses from './Toolbar.module.css';

import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar = (props) => (
    <header className={toolbarClasses.Toolbar}>
        <div className={toolbarClasses.Logo}>
            <Logo />
        </div>
        <DrawerToggle
            clicked={props.drawerToggleClicked}
            sideDrawerOpen={props.sideDrawerOpen}/>
        <nav className={toolbarClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;
