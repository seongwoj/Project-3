import axios from "axios";



export default {
  getRandomDog: function() {
    return axios.get("https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breeds/list");
  }
}