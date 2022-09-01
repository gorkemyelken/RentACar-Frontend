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
        return axios.get(`http://localhost:8080/api/cars/findbyfiltered?brandId=${brandId}&colorId=${colorId}&endDailyPrice=${endDailyPrice}&endModelYear=${endModelYear}&startDailyPrice=${startDailyPrice}&startModelYear=${startModelYear}`)
    }

    delete(id) {
        return axios.delete("http://localhost:8080/api/cars/delete?carId=" + id)
    }

    findByBrand(id) {
        return axios.get("http://localhost:8080/api/cars/findbybrand?brandId=" + id)
    }

    getAllSortedByCarNameAsc() {
        return axios.get("http://localhost:8080/api/cars/getallsortedbycarnameasc")
    }

    getAllSortedByCarNameDesc() {
        return axios.get("http://localhost:8080/api/cars/getallsortedbycarnamedesc")
    }

    getAllSortedByDailyPriceAsc() {
        return axios.get("http://localhost:8080/api/cars/getallsortedbydailypriceasc")
    }

    getAllSortedByDailyPriceDesc() {
        return axios.get("http://localhost:8080/api/cars/getallsortedbydailypricedesc")
    }

    getAllSortedByModelYearAsc() {
        return axios.get("http://localhost:8080/api/cars/getallsortedbymodelyearasc")
    }

    getAllSortedByModelYearDesc() {
        return axios.get("http://localhost:8080/api/cars/getallsortedbymodelyeardesc")
    }
}
