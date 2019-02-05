import React, {Component} from 'react';
import Auxx from '../../Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Checkout from '../../components/Navigation/Checkout/Checkout'
import Summary from '../../components/Burger/Summary/Summary'
const INGRED_PRICE = {
    salad: .5,
    cheese: .4,
    meat: 1.7,
    bacon: .7

}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState = (ingred) => {
        const sum = Object.keys(ingred).map(igKey => {
            return ingred[igKey]
        }).reduce((sum,el) => { return sum + el;},0)
        this.setState({purchaseable: sum>0})
    };
    
    addIngredientHandler = (type) => {
        const oldIngred = this.state.ingredients[type];
        const updatedCount = oldIngred + 1;
        const updatedIngred = {...this.state.ingredients}
        updatedIngred[type] = updatedCount;
        const priceAdd = INGRED_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({ingredients: updatedIngred, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngred);
    };

    removeIngredientHandler = (type) => {
        const oldIngred = this.state.ingredients[type];
        if (oldIngred <=0) {
            return;
        }
        const updatedCount = oldIngred - 1;
        const updatedIngred = {...this.state.ingredients}
        updatedIngred[type] = updatedCount;
        const priceSub = INGRED_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSub;
        this.setState({ingredients: updatedIngred, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngred);
    }
    render () {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (

        <Auxx>
            <Checkout>
                <Summary ingredients = {this.state.ingredients}/>
            </Checkout>
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControls 
            price = {this.state.totalPrice}
            igSub = {this.removeIngredientHandler} 
            igAdded = {this.addIngredientHandler}
            disabled= {disabledInfo} 
            purchaseable = {this.state.purchaseable}/>
        </Auxx>
        
        
        );

    }
};

export default BurgerBuilder;