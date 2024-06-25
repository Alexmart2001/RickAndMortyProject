import React from 'react';
import {useSelector} from "react-redux";
import '../App.css';

const Episodios = () => {
    let c = useSelector(state => state.holaAPP.incrementar);
    let first = useSelector(state => state.holaAPP.episodios);
    let imagen = useSelector(state => state.holaAPP.imagen);
    let nombre = useSelector(state => state.holaAPP.nombre);
    return (  <div>
            <h2 className="tituloPrincipal">EPISODIOS</h2>
            <div className="formal-style">
                <h2>Me encuentro en los siguientes episodios - {c}</h2>
                {imagen && <img src={imagen} alt="Personaje" className="personaje-imagen"/>}
                <h3>{nombre}</h3>
                <ul>
                    {first.map((e, i) => (
                        <li key={i}>
                            <span className="tamlet">{e}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Episodios;
