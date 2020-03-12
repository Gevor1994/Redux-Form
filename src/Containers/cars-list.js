import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {select} from "../Actions/Actions";

function CarsList(props){
    const showList = props.cars.map((item, index )=> {
        return(
            <li onClick={ () => props.select(item)} key={index}>{item.name}</li>
        )
    })

    return(
        <ul>
            {showList}
        </ul>
    )
}

function mapStateToProps (state) {
    return {
        cars: state.cars
    }
}
function matchDispatchToProps (dispatch){
    return bindActionCreators({select: select},  dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(CarsList);