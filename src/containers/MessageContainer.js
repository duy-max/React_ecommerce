import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Message from "./../components/message";
import * as actions from "./../actions/index";
class MessageContainer extends Component {
    render() {
        var { message, onChangeMsg } = this.props;



        return (
            <Message message={message} onChangeMsg={onChangeMsg} />


        )
    }

}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired,
    onChangeMsg: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => {   //get state from store and map to props
    return {
        message: state.message
    };
};

const mapDispatchToProps = (dispatch, props) => {    //Mở rộng thêm case mua nhiều sp, vd này chỉ mua 1 sp
    return {

        onChangeMsg: (message) => {
            dispatch(actions.actChangeMsg(message))
        }

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

