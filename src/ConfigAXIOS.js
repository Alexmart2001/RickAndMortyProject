import axios from 'axios';


const iAx = axios.create({
    baseURL: 'https://rickandmortyapi.com/',
    timeout: 10000,
});

iAx.interceptors.request.use(
    config => {
        console.log("Antes de la petición");
        config.headers['Authorization'] = 'Token de autorización';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

iAx.interceptors.response.use(
    response => {
        console.log("En la respuesta");
        if (response.data && response.data.results) {
            response.data.results.push({
                id: 1000,
                name: "Rober Alexander Martinez",
                status: "Vivo y coleando",
                species: "Humano",
                type: "",
                gender: "Masculino",
                origin: {
                    name: "Bogotá Colombia",
                    url: "www.planetaTierraPaisColombiaTierreroParacoEmilioEscobar.com"
                },
                location: {
                    name: "Bogotá Colombia",
                    url: "BogotaColombia.com.co"
                },
                image: "https://scontent-bog2-1.xx.fbcdn.net/v/t39.30808-6/313071417_147073901388848_5491413486968783393_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3PR0f3C_X6YQ7kNvgF8wZCl&_nc_ht=scontent-bog2-1.xx&gid=A26GXOmEOM7R1vuZE1XGt97&oh=00_AYCgx3vy1ahwqsDsijcmm-DBIoXyUui3uTdievv2EYaMEA&oe=6687D68B",
                episode: [
                    "http://alexanderMartinez.com/cap/1",
                    "http://alexanderMartinez.com/cap/2",
                    "http://alexanderMartinez.com/cap/3"
                ],
                url: "www.planetaTierraPaisColombiaTierreroParacoEmilioEscobar.com",
                created: "2024/30/06"
            });
        }
        return response;
    },
    error => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/epi';
        }
        return Promise.reject(error);
    }
);

export default iAx;
