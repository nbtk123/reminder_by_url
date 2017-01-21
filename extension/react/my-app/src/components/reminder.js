import React, {Component, PropTypes} from 'react';

class Reminder extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

Reminder.propTypes = {
    text: React.PropTypes.string
};

export default Reminder;