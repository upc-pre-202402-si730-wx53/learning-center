import http from '../../shared/services/http-common.js';

export class CategoriesApiService {
    resourceEndpoint = "/categories";

    getAll() {
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

    findByName(name) {
        return http.get(`${this.resourceEndpoint}?name=${name}`);
    }

    create(category) {
        return http.post(this.resourceEndpoint, category);
    }

    update(category) {
        return http.put(this.resourceEndpoint, category);
    }

    delete(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`);
    }
}