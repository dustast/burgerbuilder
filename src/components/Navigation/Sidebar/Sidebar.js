import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidebar.module.css'
import Auxx from '../../../Auxx'
import Backdrop from '../../Navigation/Backdrop/Backdrop'
const sidebar = (props) => {

        let comboClass = [classes.Sidebar, classes.Close];
        if (props.open) {
            comboClass = [classes.Sidebar, classes.Open];
        }

    return(
    <Auxx>
        <Backdrop clicked = {props.closed} show = {props.open} />
        <div className = {comboClass.join(' ')}>
        <div className = {classes.Logo}> 
            <Logo />
        </div>
            <NavigationItems />

        </div>
    </Auxx>
    );

};

   


export default sidebar;