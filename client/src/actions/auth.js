import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth`);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}


export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
        setAlert('Register user success', 'success');
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => setAlert(error.msg, 'error'));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        if (err instanceof Error) {
            setAlert(err.toString(), 'error');
        } else {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'error'));
            }
        }
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    dispatch({
        type: CLEAR_PROFILE
    });
}