import React from 'react';
import './style.scss';

const Msg = ({msg}) => {
    return (
        <li className="wc-msg">
            <span className="name">{msg.author}：</span>
            {msg.text && <span className="text">{msg.text}</span>}
            {msg.image && <span className="image"><img alt="图片" src={msg.image}/></span>}
        </li>
    )
}

export default Msg;