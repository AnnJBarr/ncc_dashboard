import React from "react";

class SeverityItem extends React.Component {
    render() {

        return (
            <div className="row taskRow mx-auto">
                <div className="col-2" id="critical">
                    {this.props.critical}
                </div>
                <div className="col-2" id="high">
                    {this.props.high}
                </div>
                <div className="col-2" id="medium">
                    {this.props.medium}
                </div>
                <div className="col-2" id="low">
                    {this.props.low}
                </div>
                <div className="col-2" id="information">
                    {this.props.information}
                </div>
            </div>
        );
    }
}

export default SeverityItem;