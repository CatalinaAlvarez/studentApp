import httpClient from '../http-common';

const getAll = () => {

    return httpClient.get('/students');

}

export default {getAll};