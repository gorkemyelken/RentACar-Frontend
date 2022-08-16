import axios from "axios"

export default class BrandService {
    getBrands() {
        return axios.get("http://localhost:8080/api/brands/getall")
    }
    add(values) {
        return axios.post("http://localhost:8080/api/brands/add", values);
    }
}