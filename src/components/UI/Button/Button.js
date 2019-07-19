import React from 'react';
import classNames from 'classnames/bind';
import './Button.scss';


const button = (props) => (
    <button
        disabled={props.disabled}
        className={classNames('Button', props.className)}
        onClick={props.clicked}>
        {props.children}   
    </button>
);

export default button;