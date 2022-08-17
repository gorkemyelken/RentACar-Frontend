import axios from "axios"

export default class BrandService {
    getBrands() {
        return axios.get("http://localhost:8080/api/brands/getall")
    }

    findByBrandId(id) {
        return axios.get("http://localhost:8080/api/cars/findbybrandid?brandId=" + id)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/brands/add", values);
    }
}