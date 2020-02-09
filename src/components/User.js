import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import NotificationItem from './NotificationItem'

class User extends React.Component {
    render() {
        const emailLink = "mailto:" + this.props.email + "?Subject=Scan%20dashboard%20message"
        const notifications = this.props.notifications
        console.log(notifications)

        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent ">
                        <div className="card-body">
                            <h3 className="card-title">User Details <FontAwesomeIcon icon={faUserShield} /></h3>
                            <div className="card-text">User - <a href={emailLink}>{this.props.name}</a>
                                {notifications.map(notification => {
                                    return <NotificationItem message={notification.message} read={notification.read} key={notification.id} id={notification.id} date={notification.date} />
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;