import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render () {
        return (
            <div className="text-center text-white">
                <h1>Scan Dashboard <FontAwesomeIcon icon = {faTachometerAlt} /></h1>
            </div>
        );
    }
}

export default Header;