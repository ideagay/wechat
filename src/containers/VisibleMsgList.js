import { connect } from 'react-redux';
import MsgList from '../components/msg-list';

const mapStateToProps = state => {
    return {
        msgs: state.msgs
    }
}

const VisibleMsgList = connect(
    mapStateToProps
)(MsgList)


export default VisibleMsgList;