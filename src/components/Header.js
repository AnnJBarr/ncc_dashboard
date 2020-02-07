import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render () {
        return (
            <div className="text-center">
                <h1>Scan Dashboard <FontAwesomeIcon icon = {faClipboardList} /></h1>
            </div>
        );
    }
}

export default Header;