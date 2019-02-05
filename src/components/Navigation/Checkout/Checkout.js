import React from 'react';
import classes from './Checkout.module.css';

const checkout = (props) => (
    <div className = {classes.Checkout}>{props.children}</div>
);

export default checkout;