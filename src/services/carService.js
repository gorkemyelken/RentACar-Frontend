import axios from "axios"

export default class CarService {
    getCars() {
        return axios.get("http://localhost:8080/api/cars/getall")
    }

    findByCarId(id) {
        return axios.get("http://localhost:8080/api/cars/findbycarid?carId=" + id)
    }
}