import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import SeverityItem from './SeverityItem.js';

class Totals extends React.Component {
    render() {
        const severityCounts = this.props.severity

        return (
            
            <div className="row appRow">
                <div className="mx-auto col-10">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h3 className="card-title">Severity <FontAwesomeIcon icon={faExclamationTriangle} /></h3>
                            <div className="card-text">
                                <div className="row">
                                    <div className="col-2" id="critical">Critical</div>
                                    <div className="col-2" id="high">High</div>
                                    <div className="col-2" id="medium">Medium</div>
                                    <div className="col-2" id="low">Low</div>
                                    <div className="col-2" id="information">Inform</div>
                                </div>
                            </div>
                            <SeverityItem critical={severityCounts.critical} high={severityCounts.high} medium={severityCounts.medium} low={severityCounts.low} information={severityCounts.information} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Totals;