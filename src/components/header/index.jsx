import React from 'react';
import Socket from '../../socket';
import './style.scss';

const Header = ({history}) => {
    function logout () {
        Socket.close();
        localStorage.removeItem('WECHAT_NICKNAME');
        history.replace('/');
    }
    return (
        <div className="wc-header">
            <i className="iconfont iconjiantou2" onClick={logout}></i> 
            <span className="title">聊天室</span>
            <i className="iconfont iconwebicon03"></i> 
        </div>
    )
}

export default Header;