import React from 'react';
import Socket from '../socket.js';
import ImageUpload from '../components/image-upload';
import './add-msg.scss';
import '../components/input/style.scss';

let AddMsg = ({dispatch}) => {
    let input;
    let author = localStorage.getItem('WECHAT_NICKNAME');
    function submit(e) {
        e.preventDefault();
        Socket.emit('chat message', {author: author, text: input.value});
        input.value = '';
        input.blur();
    }
    return (
        <div>
        <div className="wc-msg-form"
            onSubmit={submit}
        >
            <input className="wc-input" ref={node => {
            input = node
          }}/>
          <i className="iconfont iconfasong send" onClick={submit}></i>
          <div className="options">
              <ImageUpload/>
          </div>
        </div>
        </div>
    )
}


export default AddMsg;

