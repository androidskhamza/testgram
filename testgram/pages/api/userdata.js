import http from './http-common';

class UserDataService {
    Login(body) {
        return http.post('/login', body);
    }
    Register(body) {
        return http.post('/register', body);
    }
}

export default new UserDataService();
