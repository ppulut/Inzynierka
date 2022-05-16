import axios from 'axios'

const URL = "http://localhost:8080/nails";

class DataServices{

    getAllProducts(){
        return axios.get(URL+"/products")
    }
    

    getProductById(productId){
        return axios.get(URL + '/' + productId);
    }


}

export default new DataServices()