import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            )
        })

    return (
        <Aux>
            <h2>Your Order</h2>
            <p>Your delicious burger with a following burger:</p>
            <ul>
                {
                    ingredientsSummary
                }
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default orderSummary;