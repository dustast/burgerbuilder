import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
const buildControls = (props) => (

    <div className = {classes.BuildControls}>
    <div>Current Price:<strong>{props.price.toFixed(2)}</strong></div>
         {controls.map(ctrl => ( <BuildControl 
         subbed = {() => props.igSub(ctrl.type)} 
         added = {() => props.igAdded(ctrl.type)} 
         key= {ctrl.label} 
         igLabel = {ctrl.label}
         disabled = {props.disabled[ctrl.type]} />

         ))}
        <button disabled = {!props.purchaseable} className = {classes.OrderButton}>Order Now</button>

    </div>

);
export default buildControls;