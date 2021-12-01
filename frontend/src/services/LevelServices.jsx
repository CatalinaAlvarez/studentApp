import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/levels');
}

const create = data => {
    return httpClient.post("/levels", data);
}

const get = id => {
    return httpClient.get(`/levels/${id}`);
}

const update = data => {
    return httpClient.put('/levels', data);
}

const remove = id => {
    return httpClient.delete(`/levels/${id}`);
}

export default { getAll, create, get, update, remove };