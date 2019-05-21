import React from 'react';
import Msg from '../msg';
import './style.scss';

const MsgList = ({msgs}) => {
    return (
        <ul className="wc-msg-list">
            {msgs && msgs.map((msg, index) => {
                return <Msg key={index} msg={msg}/>;
            })}
        </ul>
    );
}

export default MsgList;