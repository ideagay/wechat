import {ADD_NOTICE} from '../actions';

const notices = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTICE: 
            return [
                ...state,
                action.text
            ];
        default:
            return state;    
    }
}

export default notices;