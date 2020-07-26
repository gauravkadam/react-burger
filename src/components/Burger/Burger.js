import React from 'react';
import classes from './Burger.module.css';
import BurgerIngrediants from './BurgerIngredients/BurgerIngredients';

const burder = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((igValue, i) =>{
            return <BurgerIngrediants key={igKey+i} type={igKey} />
        })
    })
    .reduce((arr, ele) => {
        return arr.concat(ele);
    })
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients...!!!</p>
    }
    return (
        <div className={classes.burger}>
            <BurgerIngrediants type="bread-top" />
            {transformedIngredients}
            <BurgerIngrediants type="bread-bottom" />
        </div>
    )
}

export default burder;