import React from 'react';
import { Toast, Button, InputItem, WhiteSpace} from 'antd-mobile';
import Socket from '../socket';
import './login.scss';

class Nickname extends React.Component {
    state = {
        value: ''
    }
    submit = () => {
        if (this.state.value === '') {
            return Toast.info('请先设置昵称');
        }
        Socket.open();
        Socket.emit('enter room', this.state.value);
        localStorage.setItem('WECHAT_NICKNAME', this.state.value);
        this.props.history.replace('/room');
    }
    onChange = (value) => {
        this.setState({
            value: value
        });
    }
    render () {
        return (
            <div className="nickname">
                <h1>Set a nickname!</h1>
                <div><InputItem value={this.state.value} onChange={this.onChange}/></div>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button type="primary" onClick={this.submit}>进入聊天室</Button>
            </div>
        )
    }
}

export default Nickname;