import * as actionTypes from './actionsTypes';
import orderAxios from '../../axios-orders';

export const addIngridient = (name) =>{
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName : name
    }
}

export const removeIngridient = (name) =>{
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName : name
    }
}

export const setIngridients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}

export const fetchIngredientsFail = () =>{
    return {
        type:actionTypes.FETCH_INGREDIENTS_FAIL
    }
}

export const initIngridients = () => {
    return dispach => {
        orderAxios.get('/ingredients.json').then( res => {
            dispach(setIngridients(res.data))
        }).catch( err => {
            dispach(fetchIngredientsFail());
        })
    }
}