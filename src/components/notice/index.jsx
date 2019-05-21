import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const mapStateToProps = state => {
    return {
        notices: state.notices
    }
}

let Notice = function ({notices}) {
    if (notices.length) {
        return (
            <div className="wc-notice"><span>{notices[notices.length - 1]}</span></div>
        );
    } else {
        return null;
    }
}

Notice = connect(
    mapStateToProps
)(Notice)

export default Notice;