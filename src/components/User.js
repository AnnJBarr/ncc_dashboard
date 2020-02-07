import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

class User extends React.Component {
    render() {
        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h5 className="card-title">User Details <FontAwesomeIcon icon={faTasks} /></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;