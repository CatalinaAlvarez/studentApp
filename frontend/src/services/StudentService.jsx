import httpClient from '../Http-common';

const getAll = () => {

    return httpClient.get('/students');

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll};