import React from "react";
import {connect} from 'react-redux';
import { Translate } from 'react-i18nify-lite';

function Details(props){
    if(!props.car){
        return (<p>Choose car please...</p>);
    }
    return(
        <div>
            <h2><Translate value={props.car.name}/></h2>
            <h5>{props.car.year}</h5>
            <h3>{props.car.price}</h3>
        </div>
    )
};

function mapStateToProps (state) {
    return {
        car: state.active
    }
}

export default connect(mapStateToProps)(Details)