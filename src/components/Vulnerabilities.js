import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faDatabase, faEnvelopeSquare, faFireAlt } from '@fortawesome/free-solid-svg-icons';
import VulnerabilityItem from './VulnerabilityItem.js'

class Vulnerabilities extends React.Component {
    render() {
        // <Vulnerabilities severity={this.state.vulnerabilities.severity} solution = {this.state.vulnerabilities.solution} references = {this.state.vulnerabilities.references} assets = {this.state.vulnerabilities.affectedAssets} key = {this.state.vulnerabilities.id}/>
        const vulnerabilities = this.props.vulnerabilities
        console.log(vulnerabilities)
        console.log(this.props.date)

        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h3 className="card-title">Vulnerabilities Found <FontAwesomeIcon icon={faBug} /></h3>
                            <div className="card-text">Name | <FontAwesomeIcon icon={faEnvelopeSquare} /> <FontAwesomeIcon icon={faDatabase} /> <FontAwesomeIcon icon={faFireAlt} /> | Solutions 
                               {vulnerabilities.map(item => {
                                   return <VulnerabilityItem name={item.name} affects={item.affectedAssets} solution={item.solution} link={item.references} key={item.id} />
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