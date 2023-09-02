import axios from "axios";
import { Notify } from "notiflix";
const api_key = "live_xd33lTX2zvdVSyB3YyKR2QYVZp1oHQGnHVRKZ7iVFN4JovWqpFXg0PN0nVWBny4J"
axios.defaults.headers.common["x-api-key"] = api_key;

const url = `https://api.thecatapi.com/v1`;


function fetchBreeds() {
    // GET / "https://api.thecatapi.com/v1/breeds"
    // Accept: application/json

    try {
    return axios.get(`${url}/breeds`).then(response => {
    console.log(response.data);
    return response.data;
})
    }
    catch (error) {
        console.log(error);
        Notify.failure("Error page");
    }
}

function fetchCatByBreed(breedId) {
    // GET / "https://api.thecatapi.com/v1/images/search?breed_ids=id"
    // Accept: application/json
    try {
        // wywolanie obrazow po id
        return axios.get(`${url}/images/search?breed_ids=${breedId}`).then(response => {
        console.log(response.data);
        return response.data;
    })
        }
        catch (error) {
            console.log(error);
        }  
    
}

// export functions
export {fetchBreeds, fetchCatByBreed};