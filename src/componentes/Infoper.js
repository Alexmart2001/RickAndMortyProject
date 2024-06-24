import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIncremental} from "../reducers";

const InfoPer = () => {
    let dispatch = useDispatch();
    let val = useSelector(state => state.holaAPP.incrementar);
    let infoPer = useSelector(state => state.holaAPP.informacion);
    return (<div>
            <h1>{val}</h1>
            <span className="tamlet">{infoPer} </span>
            <button onClick={() => dispatch(setIncremental(1))}>+1</button>
        </div>);
}

export default InfoPer;
