import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIncremental} from "../reducers";

const InfoPer = () => {

    let dispatch = useDispatch();
    let val = useSelector(state => state.holaAPP.incrementar);
    let infoPer = useSelector(state => state.holaAPP.informacion);
    let imagen = useSelector(state => state.holaAPP.imagen);
    let nombre = useSelector(state => state.holaAPP.nombre);
    return (<div>
        <h2 className="tituloPrincipal">INFORMACION PERSONAL</h2>
        <h1>{val}</h1>
        {imagen && <img src={imagen} alt="Personaje" className="personaje-imagen" />}
        <h3>{nombre}</h3>
        <span className="tamlet">{infoPer} </span>
        <button onClick={() => dispatch(setIncremental(1))}>+1</button>
    </div>);
}

export default InfoPer;
