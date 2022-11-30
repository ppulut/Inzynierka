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

    getAllReservations(){
        return axios.get(URL + "/reservations/Allreservations")
    }

    getUsers(){
        return axios.get("http://localhost:8080/users/getAll")
    }

    getBlackList(){
        return axios.get("http://localhost:8080/blacklist/AllBlackList")
    }

    getEmail(email){
        return axios.get("http://localhost:8080/blacklist/email"+email)
    }

    deleteReservation(id){
        return axios.delete(URL + "/reservations/delete/"+id)
    }

    deleteUser(id){
        return axios.delete(URL + "/users/delete/"+id)
    }

    deleteBlackListUser(id){
        return axios.delete(URL + "/blacklist/delete/"+id)
    }


    success(message, options) {
        alert({ ...options, type: alertType.success, message });
    }

}

export default new DataServices()