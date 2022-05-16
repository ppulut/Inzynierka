import axios from 'axios'

const URL = "http://localhost:8080/products";

class DataServices{

    getAllProducts(){
        return axios.get(URL+"/AllProducts")
    }
    

    getProductById(productId){
        return axios.get(URL + '/' + productId);
    }


}

export default new DataServices()