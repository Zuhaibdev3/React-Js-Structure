import instance from './http.service';

const Auth = {
    login: () => {
        return instance.post('/login');
    },
    signup: () => {
        return instance.post(`/signup`);
    },

};

export default Auth;
