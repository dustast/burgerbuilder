import React from 'react';
import Auxx from '../../../Auxx'
const summary = (props) => {
    const IngredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>
    })
    return (
        <Auxx>
            <h3>Your Order</h3>
            <p>deliciouso burger with the following ingredients:</p>
            <ul>{IngredientSummary}</ul>
            <p>Continue to checkout? </p>
        </Auxx>
    )
};

export default summary;