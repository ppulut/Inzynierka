import axios from 'axios'

const URL = "http://localhost:8080/products";

class DataServices{

    getAllProducts(){
        return axios.get(URL+"/AllProducts/")
    }


}

export default new DataServices()