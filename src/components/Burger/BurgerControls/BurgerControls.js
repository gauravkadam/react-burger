import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.module.css';

const control = [
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }

];

const burgerControls = (props) => (
    <div>
        <center>{props.price}</center>
        {
            control.map(ig => (
                <BurgerControl added={() => props.addIngredients(ig.type)}
                    removed={() => props.removeIngredients(ig.type)} label={ig.label}
                    disableBtn={props.disable[ig.type]}
                    key={ig.label} />
            )
            )
        }
        <center>  <button
            disabled={props.price === 0}
            className={classes.OrderButton}
            onClick={props.purchasingHandler}
            >Checkout</button></center>
    </div>
)

export default burgerControls;