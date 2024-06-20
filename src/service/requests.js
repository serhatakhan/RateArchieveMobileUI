import {client} from './instance';

async function getRequest(url, params) {
  const res = await client.get(`${url}`, {params: params});
  return res;
}

async function postRequest(url, payload) {
  const res = await client.post(`${url}`, payload);
  return res;
}

async function putRequest(url, payload) {
  const res = await client.put(`${url}`, payload);
  return res;
}

async function deleteRequest(url, payload) {
  const res = await client.delete(`${url}`, payload);
  return res;
}

export {getRequest, postRequest, putRequest, deleteRequest};
