import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import VulnerabilityItem from './VulnerabilityItem.js'

class Vulnerabilities extends React.Component {
    render() {
        const vulnerabilities = this.props.vulnerabilities

        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-10">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h3 className="card-title">Vulnerabilities Found <FontAwesomeIcon icon={faBug} /></h3>
                            <div className="card-text">
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-3">Name</div>
                                    <div className="col-2">Affects</div>
                                    <div className="col-6">Solutions </div>
                                </div>
                                {vulnerabilities.map(item => {
                                    return <VulnerabilityItem name={item.name} affects={item.affectedAssets} solution={item.solution} link={item.references} key={item.id} severity={item.severity} />
                                })}


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vulnerabilities;