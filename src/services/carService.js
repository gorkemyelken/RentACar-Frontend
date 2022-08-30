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

    findByFiltered(values) {
        return axios.get("http://localhost:8080/api/cars/findbyfiltered", values)
    }

    delete(id) {
        return axios.delete("http://localhost:8080/api/cars/delete?carId=" + id)
    }
}