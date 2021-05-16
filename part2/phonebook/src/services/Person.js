import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const createPerson = (personObj) => {
    const request = axios.post(baseUrl, personObj);
    return request.then(response => response.data);
}

const getPersons = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const updatePerson = (personObj, id) => {
    const request = axios.put(`${baseUrl}/${id}`, personObj);
    return request.then(response => response.data);
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export default { createPerson, getPersons, deletePerson, updatePerson }