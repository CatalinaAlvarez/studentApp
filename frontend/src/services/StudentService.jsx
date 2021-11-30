import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/students');
}

const create = (data) => {
    return httpClient.post("/students", data);
}

export default {getAll, create};