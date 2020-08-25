import React from 'react';

import logoClasses from './Logo.module.css';

import BurgerLogo from '../../assets/images/burger-icon.svg';

const Logo = (props) => {
    return (
        <div className={logoClasses.Logo} style={{height: props.height}}>
            <img src={BurgerLogo} alt="Burger Logo"/>
        </div>
    );
};

export default Logo;
