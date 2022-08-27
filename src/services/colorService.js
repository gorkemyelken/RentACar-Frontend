import axios from "axios"

export default class ColorService {
    getColors() {
        return axios.get("http://localhost:8080/api/colors/getall")
    }

    findByColorId(id) {
        return axios.get("http://localhost:8080/api/cars/findbycolorid?colorId=" + id)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/colors/add", values);
    }

    delete(id) {
        return axios.delete("http://localhost:8080/api/colors/delete?colorId=" + id)
    }
}