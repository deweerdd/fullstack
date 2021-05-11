import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const createPerson = (personObj) => {
    const request = axios.post(baseUrl, personObj);
    return request.then(response => response.data);
}

const getPersons = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const updatePersons = (personObj) => {
    const request = axios.get(baseUrl, personObj);
    return request.then(response => response.data);
}

export default { createPerson, getPersons, updatePersons }