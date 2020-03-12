import infoCars from './Car'
import {combineReducers} from "redux";
import ActiveCar from './car-active';
import {reducer as formReducer} from 'redux-form';

const RootReducer = combineReducers({
    cars: infoCars,
    active: ActiveCar,
    form: formReducer
});

export default RootReducer;