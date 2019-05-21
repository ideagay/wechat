import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Notice from '../components/notice';
import VisibleMsgList from './VisibleMsgList';
import AddMsg from './AddMsg';
import Socket from '../socket';
import { addMsg } from '../actions';
import 'normalize.css';
import './room.scss';

let Room = (props) => {
    Socket.on('chat message', function (msg) {
        props.dispatch(addMsg(msg));
    })
    Socket.on('image', function (msg) {
        props.dispatch(addMsg(msg));
    })
    return (
          <div className="room">
              <div className='wc-container'>
                  <Header {...props}/>
                  <div className="wc-msgs">
                      <Notice/>
                      <VisibleMsgList/>
                  </div>
                  <AddMsg/>   
              </div>
          </div>
    );
}

Room = connect()(Room);

export default Room;