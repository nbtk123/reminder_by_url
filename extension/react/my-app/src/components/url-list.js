import React, {Component, PropTypes} from 'react';
import Url from './url.js';

class UrlList extends Component {
    render() {
        return (
            <div>
                URLs:
                {
                    this.props.data.map((url) => 
                        <Url url={url} />
                    )
                }
            </div>
        );
    }
}

UrlList.propTypes = {
    data: React.PropTypes.array
};

export default UrlList;