import config from '../config/config';
import {fetchWrapper} from "../helpers/fetch-wrapper";

const baseUrl = `${config.baseUrl}`;

export const merchantService = {
    getAll,
    getById,
    add,
    update,
    delete: _delete
};

function getAll() {
    return fetchWrapper.get(`${baseUrl}/merchants`);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/merchant/${id}`);
}

function add(params) {
    return fetchWrapper.post(`${baseUrl}/merchant`, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/merchant/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/merchant/${id}`);
}