import axios from 'axios'


const URL = "http://localhost:8080";

export const alertService = {
    alert,
};

export const alertType = {
    success: 'success',
    error: 'error',
    info: 'info',
    warning: 'warning'
}

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

    getServices(){
        return axios.get(URL + "/services/AllServices")
    }

    getProblems(){
        return axios.get(URL + "/problems/AllProblems")
    }

    success(message, options) {
        alert({ ...options, type: alertType.success, message });
    }

}

export default new DataServices()