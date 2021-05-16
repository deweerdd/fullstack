import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const createPerson = (personObj) => {
    const request = axios.post(baseUrl, personObj);
    console.log(request);
    return request.then(response => response.data);
}

const getPersons = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const updatePerson = (personObj, id) => {
    id = Number(id);
    const request = axios.put(`${baseUrl}/${id}`, personObj);
    return request.then(response => response.data);
}

const deletePerson = (id) => {
    id = Number(id);
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.status);
}

export default { createPerson, getPersons, deletePerson, updatePerson }