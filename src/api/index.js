import axios from 'axios';

export const login = (payload) => {
    const url = `https://jobs-api.squareboat.info/api/v1/auth/login`;
    return axios
        .post(url, payload)
        .then((res) => {
            sessionStorage.setItem('user', JSON.stringify(res.data.data));
            return res.data.data;
        })
        .catch((err) => Promise.reject(err));
};

export const getAllJobs = (headers) => {
    const url = `https://jobs-api.squareboat.info/api/v1/recruiters/jobs`;
    return axios
        .get(url, { headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => Promise.reject(err));
};
