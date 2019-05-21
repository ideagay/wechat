import React from 'react';
import './style.scss';

const MessageInput = (props) => {
    return (
        <input className="wc-input" placeholder={props.placeholder}
        disabled={props.disabled} value={props.value}/>
    );
}

export default MessageInput;