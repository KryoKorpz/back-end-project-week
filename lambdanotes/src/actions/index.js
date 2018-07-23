import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTE = 'GET_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

const herokuURL = `https://fathomless-bastion-61109.herokuapp.com`;

export const getNotes = () => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/notes`)
        .then((response) => {
            dispatch({
                type: GET_NOTES,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const getNote = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/notes/${id}`)
        .then((response) => {
            dispatch({
                type: GET_NOTE,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const createNote = (note) => {
    return (dispatch) => {
        axios.post(`http://localhost:5000/notes`, note)
        .then((response) => {
            dispatch({
                type : CREATE_NOTE,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const updateNote = (note, id) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/notes/update/${id}`, note)
        .then((response) => {
            dispatch({
                type : UPDATE_NOTE,
                payload: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const deleteNote = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/notes/delete/${id}`)
        .then((response) => {
            dispatch({
                type : DELETE_NOTE,
                payload: response.data.notes
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const signUp = (user) => {
    return (dispatch) => {
        axios.post(`http://localhost:5000/users/register`, user)
        .then((response) => {
            dispatch({
                type : SIGNUP,
                payload: response.data.user
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const login = () => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/users/login`)
        .then((response) => {
            dispatch({
                type : LOGIN,
                payload: response.data.user
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
export const error = () => {
    return (dispatch) => {
        
    }
}