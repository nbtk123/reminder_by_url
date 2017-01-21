import React, {Component, PropTypes} from 'react';
import Reminder from './reminder.js';

class ReminderList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map((reminder) =>
                        <Reminder text={reminder} />
                    )
                }
            </div>
        );
    }
}

ReminderList.propTypes = {
    data: React.PropTypes.array
};

export default ReminderList;