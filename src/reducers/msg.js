import { ADD_MSG } from  '../actions';

const msgs = (state = [], action) => {
    switch(action.type) {
        case ADD_MSG:
            return [
                ...state,
                {
                    text: action.text,
                    author: action.author,
                    image: action.image
                }
            ]
        default:
            return state
    }
}

export default msgs;