import React, {Component} from 'react';
import Message from './message.js';

class MessageList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.messages.map((message, index) =>
                        <Message text={message} key={index}/>
                    )
                }
            </div>
        );
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array
};

export default MessageList;