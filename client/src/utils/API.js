import axios from "axios";
require('dotenv').config()

// export default {
//     // Gets all users
//     getUsers: function() {
//       return axios.get("/api/users");
//     },
//     // Gets the user with the given id
//     getUser: function(id) {
//       return axios.get("/api/users/" + id);
//     },
//     // Deletes the user with the given id
//     deleteUser: function(id) {
//       return axios.delete("/api/users/" + id);
//     },
//     // Saves a user to the database
//     saveUser: function(userData) {
//       return axios.post("/api/users", userData);
//     },

//   getDogsOfBreed: function(breed) {
//     return axios.get("https://api.thedogapi.com/v1/images/search?api_key=2b5e4023-c6cb-4141-8079-d3d8c9c3ff50")
    
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://api.thedogapi.com/v1/breeds?api_key=2b5e4023-c6cb-4141-8079-d3d8c9c3ff50");
  
//   }

// };

const URL="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?"

console.log(process.env.REACT_APP_API_KEY)
export default {
    // get dog parks from yelp based on city
    getDogParks: function(city) {
      return axios.get(URL, {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_YELP_API_KEY
        },
          params: {
          term: 'dog park',
          location: city,
          limit:40
        }
        })
    },
    // get dog friendly businesses from yelp based on city
    getDogFriendly: function(city) {
      return axios.get(URL, {
          headers: {
            Authorization: "Bearer " + process.env.API_KEY
        },
          params: {
          term: 'dogs allowed',
          location: city,
          limit:40
        }
        })
    },
    
  };