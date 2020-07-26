import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/Modal/Modal';

const INGREDIENTS_PRICES = {
    salad: 20,
    meat: 30,
    cheese: 50,
    bacon: 40
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 0,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const oldTotal = this.state.totalPrice;
        const newTotal = oldTotal + INGREDIENTS_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotal
        });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const oldTotal = this.state.totalPrice;
        const newTotal = oldTotal - INGREDIENTS_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotal
        });

    }

    purchasingHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    cancelpurchasingHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    render() {
        const disableIg = { ...this.state.ingredients };
        for (let key in disableIg) {
            disableIg[key] = disableIg[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelpurchase={this.cancelpurchasingHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    addIngredients={this.addIngredientHandler}
                    removeIngredients={this.removeIngredientHandler}
                    disable={disableIg}
                    price={this.state.totalPrice}
                    purchasingHandler={this.purchasingHandler}
                />
            </Aux>
        )
    }

}

export default BurgerBuilder;