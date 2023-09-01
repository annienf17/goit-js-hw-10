


function fetchBreeds() {
    GET / "https://api.thecatapi.com/v1/breeds"
    Accept: application/json
}

function fetchCatByBreed(breedId) {
    GET / "https://api.thecatapi.com/v1/images/search?breed_ids=id"
    Accept: application/json
    
    const markup = breedId.map((id) => {
        return `<p>${id.temperament}</p>
        <p>${id.description}</p>`
    })
}

// export functions
export {fetchBreeds, fetchCatByBreed};