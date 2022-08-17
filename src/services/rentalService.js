import axios from "axios"

export default class RentalService {
    getRentals() {
        return axios.get("http://localhost:8080/api/rentals/getall")
    }

    findByRentalId(id) {
        return axios.get("http://localhost:8080/api/cars/findbyrentalid?rentalId=" + id)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/rentals/add", values);
    }
}