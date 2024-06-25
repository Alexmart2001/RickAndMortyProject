import './App.css';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setEpisodios, setInfper, setIncremental, setImagen,setNombre} from "./reducers";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, []);

    const [fInfo, setfInfo] = useState([]);


    async function getData() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character/");
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            const first = [];
            for (let x = 0; x < data.results.length; x += 2) {
                first.push(data.results.slice(x, x + 2));
            }
            setfInfo(first);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const verInfo = (a) => {
        const originName = a.origin.name !== "unknown" ? a.origin.name : "Desconocido";
        const originUrl = a.origin.url !== "" ? a.origin.url : "URL no disponible";
        dispatch(setInfper(`Su origen es en: ${originName}  ==  la URL de su ubicación es: ${originUrl}`));
    }

    return (
            <div className="App">
                <div className="tituloPrincipal">
                    <h1 className="titulo">Biblioteca personajes de Rick y Morty</h1>
                </div>
                <div className="container">
                    <div className="left">
                        <div className="image-container">
                            {fInfo.map((ab, ib) => (
                                <div key={ib} className="image-row">
                                    {ab.map((a, i) => (
                                        <div key={a.id} className="image-item-container">
                                            <img src={a.image} className="personaje-imagenp" alt={`Imagen ${i}`} />
                                            <div className="details-container">
                                            <span className="tamlet"
                                                  onClick={() => {
                                                      dispatch(setEpisodios(a.episode));
                                                      dispatch(setImagen(a.image));
                                                      dispatch(setNombre(a.name));
                                                  }}>{a.name}</span>
                                                <span className="tamlet" onClick={() => { verInfo(a); }}>{a.status}</span>
                                                <span className="tamlet"
                                                      onClick={() => dispatch(setIncremental(2))}>IncrementalNumero</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default App;
