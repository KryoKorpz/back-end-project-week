import { GET_NOTES, GET_NOTE, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, ERROR, LOADING, HIDE_LOADING, SIGNUP, LOGIN } from '../actions'

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
    note: [],
    notes: [],
    user: [],

}


const rootReducer = ( intialState, action) => {
    switch(action.type) {
        case( GET_NOTES ):
            return Object.assign({}, intialState, { notes: action.payload, gettingNotes: true })
        case( GET_NOTE ):
            return Object.assign({}, initialState, { note: action.payload, })
        case( CREATE_NOTE ):
            return Object.assign({}, intialState, { notes: action.payload, })
        case( UPDATE_NOTE ):
            return Object.assign({}, intialState, { note: action.payload })
        case( DELETE_NOTE ):
            return Object.assign({}, intialState, { notes: action.payload })
        case( SIGNUP ):
            return Object.assign({}, initialState, { user: action.payload})
        case( LOGIN ):
            return Object.assign({}, initialState, { user: action.payload})
        case( LOADING ):
            return ({ ...intialState,  loading: true })
        case( HIDE_LOADING ):
            return ({ ...intialState,  loading: false })
        case( ERROR ):
            return
        default:
        return initialState
    }
}

export default rootReducer;