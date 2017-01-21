import React, {Component, PropTypes} from 'react';

class Url extends Component {
    render() {
        return (
            <div>{this.props.url}</div>
        );
    }
}

Url.propTypes = {
    url: React.PropTypes.string
};

export default Url;