import React, {Component} from 'react';
import Url from './url.js';
import MessageList from './message-list.js'
import './styles.css'

class UrlList extends Component {
    
    render() {
        return (
            <div>
                URLs:
                {
                    this.props.data.map((data, index) => 
                      <div key={index} className="container">
                        <div className="row flexCenterHorizontal">
                          <div className="col-xs-3">
                            <Url url={data.url} />
                          </div>
                          <div className="col-xs-3">
                            <MessageList messages={data.messages} />
                          </div>
                        </div>
                      </div>
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