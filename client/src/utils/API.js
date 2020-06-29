import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getDogsOfBreed: function(breed) {
    return axios.get("https://api.thedogapi.com/v1/images/search?api_key=2b5e4023-c6cb-4141-8079-d3d8c9c3ff50")
    
  },
  getBaseBreedsList: function() {
    return axios.get("https://api.thedogapi.com/v1/breeds?api_key=2b5e4023-c6cb-4141-8079-d3d8c9c3ff50");
  
  }

};

