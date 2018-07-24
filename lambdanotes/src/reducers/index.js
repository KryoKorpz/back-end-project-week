import { GET_NOTES, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, ERROR, LOADING, HIDE_LOADING, SIGNUP, LOGIN } from '../actions'

const initialState = {
    gettingNotes: false,
    savingNote: false,
    noteSaved: false,
    updatingNote: false,
    noteUpdated: false,
    deletingNote: false,
    noteDeleted: false,
    loading:false,
    error: null,
    notes: [],
    user: [],

}


const rootReducer = ( state = initialState, action) => {
    switch(action.type) {
        case GET_NOTES:
            return { ...state, notes: action.payload }
        case CREATE_NOTE:
            return { ...state, notes: [...state.notes, action.payload] }
        case UPDATE_NOTE :
            return { ...state }
        case DELETE_NOTE :
            return { ...state }
        case SIGNUP :
            return { ...state, user: [...state.user, action.payload] }
        case LOGIN :
            return { ...state, user: [...state.user, action.payload] }
        case LOADING :
            return { ...state,  loading: true }
        case HIDE_LOADING :
            return { ...state,  loading: false }
        case ERROR :
            return
        default:
        return state
    }
}

export default rootReducer;