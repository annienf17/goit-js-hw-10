import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
// when CSS failed 
import 'slim-select/dist/slimselect.css';
// only libraries I need NOT ALL import! 
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';


const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

// to hide loader and error html do it in CSS
loader.classList.add("hidden");
error.classList.add("hidden");

const breedArr = [];

// fetch array
fetchBreeds().then(response => {
response.forEach(el => {
  // console.log(el);
  breedArr.push(`<option value = "${el.id}">${el.name}</option>`);
  return `<option value = "${el.id}">${el.name}</option>`;
// console.log(response);
}); 
// cat list in browser added
breedSelect.insertAdjacentHTML("beforeend", breedArr);

// slimselect library to select breed
new SlimSelect({
  select: '.breed-select',
});

}).catch(onError);


breedSelect.addEventListener('change', selectCat);

// selected Option function from doc
function selectCat(event) {
// notiflix loading
  Loading.pulse("Loading data...");
  const selectId = event.target.selectedOptions[0];
  console.log(selectId);

// 
fetchCatByBreed(selectId.value).then(response => {
// fragm html print 
catInfo.innerHTML = `
      <div class="box">
      <div class="box__image">
        <img src="${response[0].url}" alt="${response[0].breeds[0].name}"/>
      </div>
      <div class="box__info">
        <h1 class="box__info--headline">${response[0].breeds[0].name}</h1>
        <p class="box__info--regular">${response[0].breeds[0].description}</p>
        <p class="box__info--bolded"><strong>Temperament:</strong> <span class="box__info--regular">${response[0].breeds[0].temperament}</span></p>
      </div>
      </div>`;
      Loading.remove();
}).catch(onError);
}


function onError (error) {
  console.log(error);
  Notify.failure("Error page");
}







// ******** wersja z api website 



// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_xd33lTX2zvdVSyB3YyKR2QYVZp1oHQGnHVRKZ7iVFN4JovWqpFXg0PN0nVWBny4J";
// console.log(axios.isCancel('something'));


// const url = `https://api.thecatapi.com/v1/breeds`;
// const api_key = "live_xd33lTX2zvdVSyB3YyKR2QYVZp1oHQGnHVRKZ7iVFN4JovWqpFXg0PN0nVWBny4J"

// let storedBreeds = []

//  fetch(url,{headers: {
//       'x-api-key': api_key
//     }})
//  .then((response) => {
//    return response.json();
//  })
// .then((data) => {
   
//    //filter to only include those with an `image` object
//    data = data.filter(img=> img.image?.url!=null)
   
//   storedBreeds = data;
   
//    for (let i = 0; i < storedBreeds.length; i++) {
//     const breed = storedBreeds[i];
//     let option = document.createElement('option');
     
//      //skip any breeds that don't have an image
//      if(!breed.image)continue
     
//     //use the current array index
//     option.value = i;
//     option.innerHTML = `${breed.name}`;
// document.querySelector('.breed-select').appendChild(option);
    
//     }
//    //show the first breed by default
//    showBreedImage[0]
// })
// .catch(function(error) {
//    console.log(error);
// });

// function showBreedImage(index)
// { 
//   document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
//   document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
//   document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
  
//   document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
// }

