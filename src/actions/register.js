
import axios from 'axios';

const BASE_URL= "http://localhost:9013/"

export function registerUser(user){
    console.log("inside",user);
     let apiURL= `${BASE_URL}register`;
     let promise=axios.post(apiURL,user);
     console.log('promise',promise);
         return {
        type:"REGISTER",
        payload:promise
    }
}