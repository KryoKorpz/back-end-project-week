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

export const getNotes = () => async dispatch => {
    try {
        dispatch({ type: LOADING })
        const {data} = await axios.get(`http://localhost:5000/notes`)
        dispatch({ type: GET_NOTES, payload: data })
        dispatch({ type: HIDE_LOADING })
    } catch (error) {
        dispatch({ type: ERROR, error})
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
        .then(() => {
            dispatch({
                type : UPDATE_NOTE,
            })
            dispatch(getNotes())
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
export const login = (user) => {
    return (dispatch) => {
        axios.post(`http://localhost:5000/users/login`, user)
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