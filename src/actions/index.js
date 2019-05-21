export const ADD_MSG = 'ADD_MSG';
export const ADD_NOTICE = 'ADD_NOTICE';

export const addMsg = ({text, image, author}) => ({
    type: ADD_MSG,
    text,
    image,
    author
});

export const addNotice = text => ({
    type: ADD_NOTICE,
    text
})