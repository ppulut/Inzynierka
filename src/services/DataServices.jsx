import axios from 'axios'

const URL = "http://localhost:8080";

class DataServices{

    getAllProducts(){
        return axios.get(URL+"/products/AllProducts/")
    }

    getOne(product_id){
        return axios.get("http://localhost:8080/productsDetails/Details/"+product_id)
    }

    getAllCategories(){
        return axios.get(URL+"/category/AllCategory")
    }

    getPrices(){
        return axios.get(URL+"/prices/AllPrices")
    }


}

export default new DataServices()