import axios from "axios"

export default class CarService {
    getCars() {
        return axios.get("http://localhost:8080/api/cars/getall")
    }

    findByCarId(id) {
        return axios.get("http://localhost:8080/api/cars/findbycarid?carId=" + id)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/cars/add", values);
    }

    findByFiltered(brandId, colorId, startDailyPrice, endDailyPrice, startModelYear, endModelYear) {
        return axios.get(`http://localhost:8080/api/cars/findbyfiltered?brandId=${brandId}&colorId=${colorId}&startDailyPrice=${startDailyPrice}&endDailyPrice=${endDailyPrice}&startModelYear=${startModelYear}&endModelYear=${endModelYear}`)
    }

    delete(id) {
        return axios.delete("http://localhost:8080/api/cars/delete?carId=" + id)
    }

    findByBrand(id) {
        return axios.get("http://localhost:8080/api/cars/findbybrand?brandId=" + id)
    }
}
