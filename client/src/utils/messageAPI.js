  
import axios from "axios"

export default{

    saveMessage: function (formData){
        return axios.post("/api/users/messages", formData);
    }
}