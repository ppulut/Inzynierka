import axios from 'axios'

const URL = "http://localhost:8080/products";

class DataServices{

    getAllProducts(){
        return axios.get(URL+"/AllProducts/")
    }
    

    getProductById(id){
        return axios.get(URL + '/Details/'+id);
    }


}

export default new DataServices()