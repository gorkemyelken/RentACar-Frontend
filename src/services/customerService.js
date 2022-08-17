import axios from "axios"

export default class CustomerService {
    getCustomers() {
        return axios.get("http://localhost:8080/api/customers/getall")
    }

    findByCustomerId(id) {
        return axios.get("http://localhost:8080/api/customers/findbycustomerid?customerId=" + id)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/customers/add", values);
    }
}