import React from 'react';
import {useSelector} from "react-redux";

const Episodios = () => {
    let c = useSelector(state => state.holaAPP.incrementar);
    let first = useSelector(state => state.holaAPP.episodios);
    return (<div>
            <h2>Me encuentro en los siguientes espisodios - {c}</h2>
            <ul>
                {first.map((e, i) => (<li key={i}>
                        <span className="tamlet">{e}</span>
                    </li>))}
            </ul>
        </div>);
}

export default Episodios;
