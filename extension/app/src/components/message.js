import React, {Component} from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

Message.propTypes = {
    text: React.PropTypes.string
};

export default Message;