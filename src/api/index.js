import axios from 'axios';

export const login = (payload) => {
    const url = `https://jobs-api.squareboat.info/api/v1/auth/login`;
    return axios
        .post(url, payload)
        .then((res) => {
            sessionStorage.setItem('user', JSON.stringify(res.data.data));
            return res.data.data;
        })
        .catch((err) => Promise.reject(err.response));
};

export const signup = (payload) => {
    const url = `https://jobs-api.squareboat.info/api/v1/auth/register`;
    return axios
        .post(url, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err) => Promise.reject(err.response));
};

export const postJob = (payload, headers) => {
    const url = `https://jobs-api.squareboat.info/api/v1/jobs`;
    return axios
        .post(url, payload, { headers })
        .then((res) => {
            return res.data;
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

export const getAllApplicants = (jobId, headers) => {
    const url = `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobId}/candidates`;
    return axios
        .get(url, { headers })
        .then((res) => {
            return res.data;
        })
        .catch((err) => Promise.reject(err));
};

export const forgotPassword = (email) => {
    const url = `https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email=${email}`;
    return axios
        .get(url)
        .then((res) => {
            return res.data;
        })
        .catch((err) => Promise.reject(err));
};

export const resetPassword = (resetToken) => {
    const url = `https://jobs-api.squareboat.info/api/v1/auth/resetpassword/${resetToken}`;
    return axios
        .get(url)
        .then((res) => {
            return res.data;
        })
        .catch((err) => Promise.reject(err));
};

export const changePassword = (payload) => {
    const url = `https://jobs-api.squareboat.info/api/v1/auth/resetpassword`;
    return axios
        .post(url, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err) => Promise.reject(err.response));
};
