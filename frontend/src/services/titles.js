import http from "../http-common";


class TitlesDataService {
    getAll() {
        return http.get(`streamtitles`);
    }

    get(imdbID) {
        return http.get(`/title?imdbID=${imdbID}`);
    }

    // create(data) {
    //     return http.post("/titles", data);
    // }

    // update(id, data) {
    //     return http.put(`/titles/${id}`, data);
    // }

    // delete(id) {
    //     return http.delete(`/titles/${id}`);
    // }

    // deleteAll() {
    //     return http.delete(`/titles`);
    // }

    // findByTitle(title) {
    //     return http.get(`/titles?title=${title}`);
    // }
}
export default new TitlesDataService();