import React from 'react';
import classes from './BuildControl.module.css'
const buildControl = (props) => (

    <div className = {classes.BuildControl}>
            <div className = {classes.igLabel}>{props.igLabel}</div>
            <button disabled = {props.disabled} onClick = {props.subbed} className = {classes.Less}>Less</button>
            <button onClick = {props.added} className = {classes.More}>More</button>
    </div>
);

export default buildControl;