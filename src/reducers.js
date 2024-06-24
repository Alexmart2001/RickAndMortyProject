import {createSlice} from "@reduxjs/toolkit";

const  estIni = {
    episodios: [],
    informacion: "",
    incrementar: 0
};

const reducers = createSlice({
    name: "holaAPP",
    initialState: estIni,
    reducers: {
        setEpisodios: (state, action) => {
            state.episodios = action.payload;
},
        setInfper: (state, action) => {
            state.informacion = action.payload;
        },

        setIncremental: (state, action) => {
            state.incrementar += action.payload;
        }
    }
});

export const {setEpisodios, setInfper, setIncremental} = reducers.actions;
export default reducers.reducer;