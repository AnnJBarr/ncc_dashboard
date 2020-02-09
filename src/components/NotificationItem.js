import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

class NotificationItem extends React.Component {
    render() {

        return (
            <div className="row taskRow">
                <div className="col-5">{this.props.message}
                </div>
                <div className="col-4">{this.props.date}
                </div>
                <div className="col-2">{this.props.read === true ? <div id="read"><FontAwesomeIcon icon={faBookReader} /></div> : <div id="unread"><FontAwesomeIcon icon={faBookReader} /></div>}
                </div>
            </div>

        );
    }
}

export default NotificationItem;