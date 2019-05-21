import io from 'socket.io-client';

let nickname = localStorage.getItem('WECHAT_NICKNAME');

const socket = io('http://172.17.11.7:9000', {
    autoConnect: false,
    query: {
        nickname: nickname
    }
});

socket.on('connect', () => {
    socket.io.opts.query = {
        token: localStorage.getItem('WECHAT_NICKNAME')
    }
});

if (nickname) {
    socket.open();
    socket.emit('enter room', nickname);
}

export default socket;