import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTE = 'GET_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';

export const getNotes = () => {
    return (dispatch) => {
        axios.get(`https://fathomless-bastion-61109.herokuapp.com/notes`)
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
        axios.get(`https://fathomless-bastion-61109.herokuapp.com/notes/${id}`)
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
        axios.post(`https://fathomless-bastion-61109.herokuapp.com/notes`, note)
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
        axios.put(`https://fathomless-bastion-61109.herokuapp.com/notes/update/${id}`, note)
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
        axios.delete(`https://fathomless-bastion-61109.herokuapp.com/notes/delete/${id}`)
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
export const error = () => {
    return (dispatch) => {
        
    }
}