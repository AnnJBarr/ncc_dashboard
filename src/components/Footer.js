import React from "react";
import logo from "../images/nccgroup_logo.jpg"
// import './Footer.css'
class Footer extends React.Component {
    render() {

        return (
            <div className="row d-none d-md-block mt-2">
                <div className="mx-auto col-12 col-lg-10">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center">
                                <h5><img width="280 px" src={logo} alt="log" /> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;