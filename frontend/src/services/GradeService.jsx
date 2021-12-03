import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/grades");
};

const create = (data) => {
  return httpClient.post("/grades", data);
};

const get = (id) => {
  return httpClient.get(`/grades/${id}`);
};

const update = (data) => {
  return httpClient.put("/grades", data);
};

const remove = (id) => {
  return httpClient.delete(`/grades/${id}`);
};

export default { getAll, create, get, update, remove };
