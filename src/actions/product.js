
import axios from 'axios';

const BASE_URL= "http://localhost:9013/"

export function getAllProducts(){
     console.log("Inside get All products")
     let apiURL= `${BASE_URL}products`;
     let promise=axios.get(apiURL);
     console.log('promise',promise);
         return {
        type:"ALL_PRODUCTS",
        payload:promise
    }
}