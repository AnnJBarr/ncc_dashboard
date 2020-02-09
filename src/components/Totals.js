import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import SeverityItem from './SeverityItem.js';

class Totals extends React.Component {
    render() {
        const severityCounts = this.props.severity
        console.log("sev count", severityCounts)

        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h3 className="card-title">Severity <FontAwesomeIcon icon={faExclamationTriangle} /></h3>
                            <div className="card-text">Critical | High | Medium | Low | Information
                                <SeverityItem critical={severityCounts.critical} high={severityCounts.high} medium={severityCounts.medium} low={severityCounts.low} information={severityCounts.information} />
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Totals;