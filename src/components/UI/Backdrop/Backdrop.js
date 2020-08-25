import React from 'react';

import backdropClasses from './Backdrop.module.css';

const Backdrop = (props) => (
    props.show ? <div className={backdropClasses.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;
