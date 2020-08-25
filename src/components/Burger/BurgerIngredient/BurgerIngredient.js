import React, { Component } from 'react';
import PropTypes from 'prop-types';

import burgerIngredientClasses from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={burgerIngredientClasses.BreadBottom}></div>
                break;

            case ('bread-top'):
                ingredient = (
                    <div className={burgerIngredientClasses.BreadTop}>
                        <div className={burgerIngredientClasses.Seeds1}></div>
                        <div className={burgerIngredientClasses.Seeds2}></div>
                    </div>
                );
                break;

            case ('meat'):
                ingredient = <div className={burgerIngredientClasses.Meat}></div>
                break;

            case ('cheese'):
                ingredient = <div className={burgerIngredientClasses.Cheese}></div>
                break;

            case ('bacon'):
                ingredient = <div className={burgerIngredientClasses.Bacon}></div>
                break;

            case ('salad'):
                ingredient = <div className={burgerIngredientClasses.Salad}></div>
                break;

            case ('tomato'):
                ingredient = <div className={burgerIngredientClasses.Tomato}></div>
                break;

            default:
                ingredient = null;
        }

        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
