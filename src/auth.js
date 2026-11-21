import axios from 'axios';

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => !!getToken();

export const setSession = token => {
    localStorage.setItem('token', token);
    localStorage.setItem('isLoggedIn', 'true');
};

export const clearSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
};

// Expired or invalid token: drop the session and send the user back to login.
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            clearSession();
            if (window.location.pathname !== '/') {
                window.location.assign('/');
            }
        }
        return Promise.reject(error);
    }
);
