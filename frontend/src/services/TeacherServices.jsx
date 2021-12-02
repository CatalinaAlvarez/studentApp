import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/teachers');
}

const create = data => {
    return httpClient.post("/teachers", data);
}

const get = id => {
    return httpClient.get(`/teachers/${id}`);
}

const update = data => {
    return httpClient.put('/teachers', data);
}

const remove = id => {
    return httpClient.delete(`/teachers/${id}`);
}

export default { getAll, create, get, update, remove };